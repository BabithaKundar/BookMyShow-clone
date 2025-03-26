import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Movies.css';

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: "Dunki",
      image: "https://tse3.mm.bing.net/th?id=OIP.JjRnzKgoA6tECsudXM5zJwHaCe&pid=Api&P=0&h=180",
      rating: "4.5/5",
      genre: "Comedy/Drama"
    },
    {
      id: 2,
      title: "Salaar: Part 1 - Cease Fire",
      image: "https://tse2.mm.bing.net/th?id=OIP.Fz2d0KHSUQRa2S970ktj0QHaCe&pid=Api&P=0&h=180",
      rating: "4.8/5",
      genre: "Action/Thriller"
    },
    {
      id: 3,
      title: "Aquaman and the Lost Kingdom",
      image: "https://tse1.mm.bing.net/th?id=OIP.e60Gi6rOZSWm4NUnHz3lBQAAAA&pid=Api&P=0&h=180",
      rating: "4.2/5",
      genre: "Action/Adventure/Fantasy"
    },
    {
      id: 4,
      title: "Sam Bahadur",
      image: "https://tse2.mm.bing.net/th?id=OIP.xgHZe2GfaXgkRUVzLLeZlAHaKX&pid=Api&P=0&h=180",
      rating: "4.6/5",
      genre: "Biography/Drama"
    },
    {
      id: 5,
      title: "Animal",
      image: "https://tse4.mm.bing.net/th?id=OIP.W3rUgCXUTVr7_yvHdEfNPgHaE8&pid=Api&P=0&h=180",
      rating: "4.3/5",
      genre: "Action/Crime/Drama"
    },
    {
      id: 6,
      title: "12th Fail",
      image: "https://tse1.mm.bing.net/th?id=OIP.e60Gi6rOZSWm4NUnHz3lBQAAAA&pid=Api&P=0&h=180",
      rating: "4.7/5",
      genre: "Biography/Drama"
    }
  ];

  return (
    <div className="movies-page">
      <Container>
        <h1 className="section-title mb-4">Movies</h1>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                <Card className="movie-card h-100">
                  <Card.Img variant="top" src={movie.image} alt={movie.title} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                      <span className="rating">{movie.rating}</span>
                      <span className="genre">{movie.genre}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies; 