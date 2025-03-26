import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const featuredMovies = [
  {
    id: 1,
    title: "Dunki",
    image: "https://imgs.search.brave.com/8Wc0q-9SR2V_4usVxRyS6D5GVmgB6ZiiNaQ6BJlvsIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzL3NoYXJlZGlt/YWdlcy8yMDI0LzA0/L2R1bmtpLTIwMjQt/bW92aWUtcG9zdGVy/LmpwZw",
    rating: "4.5/5",
    genre: "Comedy/Drama"
  },
  {
    id: 2,
    title: "Salaar: Part 1 - Cease Fire",
    image: "https://tse3.mm.bing.net/th?id=OIP.JjRnzKgoA6tECsudXM5zJwHaCe&pid=Api&P=0&h=180",
    rating: "4.8/5",
    genre: "Action/Thriller"
  },
  {
    id: 3,
    title: "Aquaman and the Lost Kingdom",
    image: "https://tse1.mm.bing.net/th?id=OIP.etyXisE5ilmTUyocASkSbwHaDt&pid=Api&P=0&h=180",
    rating: "4.2/5",
    genre: "Action/Adventure/Fantasy"
  },
  {
    id: 4,
    title: "Sam Bahadur",
    image: "https://tse2.mm.bing.net/th?id=OIP.xgHZe2GfaXgkRUVzLLeZlAHaKX&pid=Api&P=0&h=180",
    rating: "4.6/5",
    genre: "Biography/Drama"
  }
];

const Home = () => {
  return (
    <div className="home">
      <Carousel className="featured-carousel">
        {featuredMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className="carousel-content">
              <img
                className="d-block w-100 carousel-image"
                src={movie.image}
                alt={movie.title}
                style={{
                  height: '500px',
                  objectFit: 'contain',
                  backgroundColor: '#000'
                }}
              />
              <Carousel.Caption>
                <h2>{movie.title}</h2>
                <p>{movie.genre}</p>
                <p>Rating: {movie.rating}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-5">
        <h2 className="section-title">Recommended Movies</h2>
        <Row>
          {featuredMovies.map((movie) => (
            <Col key={movie.id} xs={6} md={4} lg={3} className="mb-4">
              <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                <Card className="movie-card h-100">
                  <Card.Img 
                    variant="top" 
                    src={movie.image} 
                    alt={movie.title}
                    style={{
                      height: '300px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
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

export default Home; 