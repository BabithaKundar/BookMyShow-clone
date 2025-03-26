import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/BookingPage.css';

const BookingPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  // Mock data
  const movie = {
    title: 'Movie Title',
    image: 'https://via.placeholder.com/300x450',
    duration: '2h 30m',
    language: 'English'
  };

  const dates = [
    { id: 1, date: '2024-03-20', day: 'Today' },
    { id: 2, date: '2024-03-21', day: 'Tomorrow' },
    { id: 3, date: '2024-03-22', day: 'Fri' },
    { id: 4, date: '2024-03-23', day: 'Sat' },
    { id: 5, date: '2024-03-24', day: 'Sun' }
  ];

  const showTimes = [
    { id: 1, time: '10:30 AM', price: 250 },
    { id: 2, time: '1:45 PM', price: 300 },
    { id: 3, time: '4:30 PM', price: 350 },
    { id: 4, time: '7:15 PM', price: 400 },
    { id: 5, time: '10:00 PM', price: 350 }
  ];

  const seats = Array.from({ length: 64 }, (_, i) => ({
    id: i + 1,
    isBooked: Math.random() < 0.3 // Randomly mark some seats as booked
  }));

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedShow(null);
    setSelectedSeats([]);
  };

  const handleShowSelect = (show) => {
    setSelectedShow(show);
    setSelectedSeats([]);
  };

  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else if (selectedSeats.length < 4) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setShowPayment(false);
      navigate('/booking-confirmation');
    }, 2000);
  };

  const calculateTotal = () => {
    if (!selectedShow) return 0;
    return selectedSeats.length * selectedShow.price;
  };

  return (
    <div className="booking-page">
      <Container>
        <Row>
          <Col md={8}>
            <div className="seat-map">
              <div className="screen">SCREEN</div>
              <div className="seats-container">
                {seats.map((seat) => (
                  <div
                    key={seat.id}
                    className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''} ${
                      seat.isBooked ? 'booked' : ''
                    }`}
                    onClick={() => !seat.isBooked && handleSeatSelect(seat.id)}
                  >
                    {seat.id}
                  </div>
                ))}
              </div>
              <div className="seat-legend">
                <div className="legend-item">
                  <div className="seat"></div>
                  <span>Available</span>
                </div>
                <div className="legend-item">
                  <div className="seat selected"></div>
                  <span>Selected</span>
                </div>
                <div className="legend-item">
                  <div className="seat booked"></div>
                  <span>Booked</span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="booking-summary">
              <div className="movie-info">
                <img src={movie.image} alt={movie.title} />
                <div>
                  <h4>{movie.title}</h4>
                  <p>{movie.duration} • {movie.language}</p>
                </div>
              </div>

              <div className="date-selection mb-4">
                <h5>Select Date</h5>
                <div className="d-flex gap-2">
                  {dates.map((date) => (
                    <Button
                      key={date.id}
                      variant={selectedDate?.id === date.id ? 'primary' : 'outline-primary'}
                      onClick={() => handleDateSelect(date)}
                    >
                      {date.day}
                    </Button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div className="show-times mb-4">
                  <h5>Select Show Time</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {showTimes.map((show) => (
                      <Button
                        key={show.id}
                        variant={selectedShow?.id === show.id ? 'primary' : 'outline-primary'}
                        onClick={() => handleShowSelect(show)}
                      >
                        {show.time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {selectedShow && (
                <div className="price-summary">
                  <h5>Price Details</h5>
                  <div className="price-item">
                    <span>Seats ({selectedSeats.length})</span>
                    <span>₹{selectedSeats.length * selectedShow.price}</span>
                  </div>
                  <div className="price-item">
                    <span>Convenience Fee</span>
                    <span>₹{selectedSeats.length * 30}</span>
                  </div>
                  <div className="price-item total">
                    <span>Total Amount</span>
                    <span>₹{calculateTotal() + (selectedSeats.length * 30)}</span>
                  </div>
                  <Button
                    variant="primary"
                    className="w-100 mt-3"
                    onClick={() => setShowPayment(true)}
                    disabled={selectedSeats.length === 0}
                  >
                    Proceed to Payment
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Payment Modal */}
      <Modal show={showPayment} onHide={() => setShowPayment(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePaymentSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={(e) =>
                  setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
                }
                required
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={(e) =>
                      setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    value={paymentDetails.cvv}
                    onChange={(e) =>
                      setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                value={paymentDetails.name}
                onChange={(e) =>
                  setPaymentDetails({ ...paymentDetails, name: e.target.value })
                }
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Pay ₹{calculateTotal() + (selectedSeats.length * 30)}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingPage; 