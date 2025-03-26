import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import CustomButton from '../components/CustomButton';

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Summer Music Festival",
      date: "2024-06-15",
      venue: "Central Park",
      price: 1500,
      category: "Music",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60",
      description: "A day of amazing music performances"
    },
    {
      id: 2,
      title: "Comedy Night",
      date: "2024-06-20",
      venue: "Laugh Factory",
      price: 800,
      category: "Comedy",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
      description: "An evening of laughter with top comedians"
    },
    {
      id: 3,
      title: "Food & Wine Festival",
      date: "2024-07-01",
      venue: "City Convention Center",
      price: 2000,
      category: "Food",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60",
      description: "Experience the finest cuisines and wines"
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "2024-07-10",
      venue: "Modern Art Gallery",
      price: 500,
      category: "Art",
      image: "https://images.unsplash.com/photo-1531913764164-f152c22e8c38?w=800&auto=format&fit=crop&q=60",
      description: "Contemporary art showcase featuring local artists"
    }
  ]);

  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('all');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(filter.toLowerCase()) ||
                         event.description.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = category === 'all' || event.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="mt-5 pt-5">
      <h2 className="mb-4">Upcoming Events</h2>
      
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search events..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Music">Music</option>
            <option value="Comedy">Comedy</option>
            <option value="Food">Food</option>
            <option value="Art">Art</option>
            <option value="Sports">Sports</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {filteredEvents.map(event => (
          <Col key={event.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={event.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  <strong>Date:</strong> {event.date}<br />
                  <strong>Venue:</strong> {event.venue}<br />
                  <strong>Category:</strong> {event.category}
                </Card.Text>
                <Card.Text>{event.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">₹{event.price}</span>
                  <CustomButton variant="primary">Book Now</CustomButton>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events; 