import React, { useState } from 'react';
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const MovieListings = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "The Epic Adventure",
      genre: "Action/Adventure",
      releaseDate: "2024-03-15",
      rating: 4.5,
      price: 250,
      language: "English"
    },
    {
      id: 2,
      name: "Romantic Comedy",
      genre: "Romance/Comedy",
      releaseDate: "2024-03-20",
      rating: 4.2,
      price: 200,
      language: "Hindi"
    },
    {
      id: 3,
      name: "Mystery Thriller",
      genre: "Thriller",
      releaseDate: "2024-03-25",
      rating: 4.8,
      price: 300,
      language: "English"
    },
    {
      id: 4,
      name: "Family Drama",
      genre: "Drama",
      releaseDate: "2024-04-01",
      rating: 4.0,
      price: 180,
      language: "Hindi"
    }
  ]);

  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [language, setLanguage] = useState('all');

  const filteredMovies = movies
    .filter(movie => {
      const matchesSearch = movie.name.toLowerCase().includes(filter.toLowerCase()) ||
                          movie.genre.toLowerCase().includes(filter.toLowerCase());
      const matchesLanguage = language === 'all' || movie.language === language;
      return matchesSearch && matchesLanguage;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

  return (
    <Container className="mt-5 pt-5">
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search movies..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
            <option value="price">Sort by Price</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="all">All Languages</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </Form.Select>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="movie-table">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Language</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map(movie => (
            <tr key={movie.id}>
              <td>
                <Link to={`/movies/${movie.id}`} className="text-decoration-none">
                  {movie.name}
                </Link>
              </td>
              <td>{movie.genre}</td>
              <td>{movie.language}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.rating}/5</td>
              <td>₹{movie.price}</td>
              <td>
                <Link to={`/movies/${movie.id}`}>
                  <CustomButton variant="primary" size="sm" className="me-2">
                    Book Now
                  </CustomButton>
                </Link>
                <CustomButton variant="secondary" size="sm">
                  Watch Trailer
                </CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MovieListings; 