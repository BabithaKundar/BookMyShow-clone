import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTicketAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import '../styles/BookingConfirmation.css';

const BookingConfirmation = () => {
  const navigate = useNavigate();

  // Mock booking data
  const booking = {
    id: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    movie: 'Movie Title',
    date: 'March 20, 2024',
    time: '7:15 PM',
    seats: ['A1', 'A2', 'A3'],
    total: 1200,
    theater: 'Cineplex Theater',
    location: 'City Center Mall'
  };

  return (
    <div className="booking-confirmation">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="confirmation-card">
              <Card.Body className="text-center">
                <div className="success-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h2>Booking Confirmed!</h2>
                <p className="booking-id">Booking ID: {booking.id}</p>

                <div className="booking-details">
                  <div className="detail-item">
                    <h5>Movie</h5>
                    <p>{booking.movie}</p>
                  </div>
                  <div className="detail-item">
                    <h5>Date & Time</h5>
                    <p>{booking.date} at {booking.time}</p>
                  </div>
                  <div className="detail-item">
                    <h5>Theater</h5>
                    <p>{booking.theater}</p>
                    <p className="text-muted">{booking.location}</p>
                  </div>
                  <div className="detail-item">
                    <h5>Seats</h5>
                    <p>{booking.seats.join(', ')}</p>
                  </div>
                  <div className="detail-item">
                    <h5>Total Amount</h5>
                    <p>₹{booking.total}</p>
                  </div>
                </div>

                <div className="ticket-preview">
                  <div className="ticket">
                    <div className="ticket-left">
                      <div className="ticket-icon">
                        <FontAwesomeIcon icon={faTicketAlt} />
                      </div>
                    </div>
                    <div className="ticket-right">
                      <h4>{booking.movie}</h4>
                      <p>{booking.date} • {booking.time}</p>
                      <p>{booking.theater}</p>
                      <p>Seats: {booking.seats.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <Button
                    variant="primary"
                    className="me-3"
                    onClick={() => window.print()}
                  >
                    Download Ticket
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => navigate('/')}
                  >
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Back to Home
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingConfirmation; 