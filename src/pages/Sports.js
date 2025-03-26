import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import CustomButton from '../components/CustomButton';

const Sports = () => {
  const [sports, setSports] = useState([
    {
      id: 1,
      title: "Cricket World Cup 2024",
      date: "2024-06-10",
      venue: "International Cricket Stadium",
      price: 2500,
      category: "Cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=60",
      status: "Upcoming",
      teams: "India vs Australia"
    },
    {
      id: 2,
      title: "Football Championship",
      date: "2024-06-15",
      venue: "City Football Ground",
      price: 1200,
      category: "Football",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=60",
      status: "Live",
      teams: "City FC vs United FC"
    },
    {
      id: 3,
      title: "Tennis Grand Slam",
      date: "2024-07-01",
      venue: "Tennis Club",
      price: 1800,
      category: "Tennis",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&auto=format&fit=crop&q=60",
      status: "Upcoming",
      teams: "Men's Singles Final"
    },
    {
      id: 4,
      title: "Basketball Finals",
      date: "2024-07-15",
      venue: "Sports Arena",
      price: 1500,
      category: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=60",
      status: "Upcoming",
      teams: "Eagles vs Hawks"
    }
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Live':
        return <Badge bg="danger">LIVE</Badge>;
      case 'Upcoming':
        return <Badge bg="success">Upcoming</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <Container className="mt-5 pt-5">
      <h2 className="mb-4">Sports Events</h2>

      <Row>
        {sports.map(sport => (
          <Col key={sport.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={sport.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Badge bg="primary">{sport.category}</Badge>
                  {getStatusBadge(sport.status)}
                </div>
                <Card.Title>{sport.title}</Card.Title>
                <Card.Text>
                  <strong>Date:</strong> {sport.date}<br />
                  <strong>Venue:</strong> {sport.venue}<br />
                  <strong>Match:</strong> {sport.teams}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">₹{sport.price}</span>
                  <CustomButton 
                    variant={sport.status === 'Live' ? 'primary' : 'secondary'}
                    disabled={sport.status !== 'Live' && sport.status !== 'Upcoming'}
                  >
                    {sport.status === 'Live' ? 'Watch Live' : 'Book Tickets'}
                  </CustomButton>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Subscribe to Sports Pass</Card.Title>
              <Card.Text>
                Get access to all live sports events and exclusive content with our Sports Pass subscription.
              </Card.Text>
              <CustomButton variant="primary">Subscribe Now</CustomButton>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Sports; 