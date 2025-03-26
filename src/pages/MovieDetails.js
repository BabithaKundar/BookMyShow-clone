import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTicket, faShare, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Add this function to get movie details based on ID
  const getMovieDetails = (movieId) => {
    const movies = {
      1: {
        id: 1,
        title: "Dunki",
        image: "https://imgs.search.brave.com/8Wc0q-9SR2V_4usVxRyS6D5GVmgB6ZiiNaQ6BJlvsIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzL3NoYXJlZGlt/YWdlcy8yMDI0LzA0/L2R1bmtpLTIwMjQt/bW92aWUtcG9zdGVy/LmpwZw",
        rating: "4.5/5",
        genre: "Comedy/Drama",
        releaseDate: "2023-12-21",
        duration: "2h 41m",
        language: "Hindi",
        description: "Four friends from a village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier promises to take them to the land of their dreams.",
        cast: ["Shah Rukh Khan", "Taapsee Pannu", "Vicky Kaushal"],
        director: "Rajkumar Hirani",
        trailerUrl: "https://www.youtube.com/embed/7j4WxZqXqXQ",
        gallery: [
          "https://imgs.search.brave.com/8Wc0q-9SR2V_4usVxRyS6D5GVmgB6ZiiNaQ6BJlvsIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzL3NoYXJlZGlt/YWdlcy8yMDI0LzA0/L2R1bmtpLTIwMjQt/bW92aWUtcG9zdGVy/LmpwZw",
          "https://imgs.search.brave.com/8Wc0q-9SR2V_4usVxRyS6D5GVmgB6ZiiNaQ6BJlvsIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzL3NoYXJlZGlt/YWdlcy8yMDI0LzA0/L2R1bmtpLTIwMjQt/bW92aWUtcG9zdGVy/LmpwZw",
          "https://imgs.search.brave.com/8Wc0q-9SR2V_4usVxRyS6D5GVmgB6ZiiNaQ6BJlvsIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzL3NoYXJlZGlt/YWdlcy8yMDI0LzA0/L2R1bmtpLTIwMjQt/bW92aWUtcG9zdGVy/LmpwZw",
          "https://imgs.search.brave.com/8Wc0q-9SR2V_4usVxRyS6D5GVmgB6ZiiNaQ6BJlvsIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzL3NoYXJlZGlt/YWdlcy8yMDI0LzA0/L2R1bmtpLTIwMjQt/bW92aWUtcG9zdGVy/LmpwZw"
        ]
      },
      2: {
        id: 2,
        title: "Salaar: Part 1 - Cease Fire",
        image: "https://imgs.search.brave.com/Yl0JBeuI5GVtDDLf-Ci0XJkXZStcAPHR43Vs6IcvsyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltTXdZakV5/WlRjdE9UWmpOUzAw/TVRnNUxUZzBaREV0/TjJNNU5qZ3hNMlV5/TXpVNFhrRXlYa0Zx/Y0djQC5qcGc",
        rating: "4.8/5",
        genre: "Action/Thriller",
        releaseDate: "2023-12-22",
        duration: "2h 55m",
        language: "Telugu, Hindi, Tamil, Malayalam, Kannada",
        description: "A gang leader tries to keep a promise made to his dying friend and takes on the other gang members in a bloody battle.",
        cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan", "Jagapathi Babu"],
        director: "Prashanth Neel",
        trailerUrl: "https://www.youtube.com/embed/KaNgMnSc4Jw",
        gallery: [
          "https://imgs.search.brave.com/Yl0JBeuI5GVtDDLf-Ci0XJkXZStcAPHR43Vs6IcvsyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltTXdZakV5/WlRjdE9UWmpOUzAw/TVRnNUxUZzBaREV0/TjJNNU5qZ3hNMlV5/TXpVNFhrRXlYa0Zx/Y0djQC5qcGc",
          "https://imgs.search.brave.com/Yl0JBeuI5GVtDDLf-Ci0XJkXZStcAPHR43Vs6IcvsyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltTXdZakV5/WlRjdE9UWmpOUzAw/TVRnNUxUZzBaREV0/TjJNNU5qZ3hNMlV5/TXpVNFhrRXlYa0Zx/Y0djQC5qcGc",
          "https://imgs.search.brave.com/Yl0JBeuI5GVtDDLf-Ci0XJkXZStcAPHR43Vs6IcvsyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltTXdZakV5/WlRjdE9UWmpOUzAw/TVRnNUxUZzBaREV0/TjJNNU5qZ3hNMlV5/TXpVNFhrRXlYa0Zx/Y0djQC5qcGc",
          "https://imgs.search.brave.com/Yl0JBeuI5GVtDDLf-Ci0XJkXZStcAPHR43Vs6IcvsyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlltTXdZakV5/WlRjdE9UWmpOUzAw/TVRnNUxUZzBaREV0/TjJNNU5qZ3hNMlV5/TXpVNFhrRXlYa0Zx/Y0djQC5qcGc"
        ]
      },
      3: {
        id: 3,
        title: "Aquaman and the Lost Kingdom",
        image: "https://imgs.search.brave.com/HB8P5I9IHrtVpFQT133EPcL-D4SEGUXPdXk9ABkWnQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllqUTFaVFV6/TVdNdFkyVmtOUzAw/WkRSakxXRXdPRFl0/WW1Ga01XSmlOVFF4/TURVelhrRXlYa0Zx/Y0djQC5qcGc",
        rating: "4.2/5",
        genre: "Action/Adventure/Fantasy",
        releaseDate: "2023-12-22",
        duration: "2h 4m",
        language: "English, Hindi",
        description: "Aquaman balances his duties as Atlantis' king and family man while Black Manta seeks revenge on his family for his father's death.",
        cast: ["Jason Momoa", "Patrick Wilson", "Amber Heard", "Yahya Abdul-Mateen II"],
        director: "James Wan",
        trailerUrl: "https://www.youtube.com/embed/FV3bqvOHRQo",
        gallery: [
          "https://imgs.search.brave.com/HB8P5I9IHrtVpFQT133EPcL-D4SEGUXPdXk9ABkWnQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllqUTFaVFV6/TVdNdFkyVmtOUzAw/WkRSakxXRXdPRFl0/WW1Ga01XSmlOVFF4/TURVelhrRXlYa0Zx/Y0djQC5qcGc",
          "https://imgs.search.brave.com/HB8P5I9IHrtVpFQT133EPcL-D4SEGUXPdXk9ABkWnQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllqUTFaVFV6/TVdNdFkyVmtOUzAw/WkRSakxXRXdPRFl0/WW1Ga01XSmlOVFF4/TURVelhrRXlYa0Zx/Y0djQC5qcGc",
          "https://imgs.search.brave.com/HB8P5I9IHrtVpFQT133EPcL-D4SEGUXPdXk9ABkWnQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllqUTFaVFV6/TVdNdFkyVmtOUzAw/WkRSakxXRXdPRFl0/WW1Ga01XSmlOVFF4/TURVelhrRXlYa0Zx/Y0djQC5qcGc",
          "https://imgs.search.brave.com/HB8P5I9IHrtVpFQT133EPcL-D4SEGUXPdXk9ABkWnQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllqUTFaVFV6/TVdNdFkyVmtOUzAw/WkRSakxXRXdPRFl0/WW1Ga01XSmlOVFF4/TURVelhrRXlYa0Zx/Y0djQC5qcGc"
        ]
      }
    };
    return movies[movieId] || movies[1]; // Default to Dunki if movie not found
  };

  // Get movie details based on ID from URL
  const movieId = parseInt(window.location.pathname.split('/').pop()) || 1;
  const currentMovie = getMovieDetails(movieId);

  const handleBookNow = () => {
    navigate('/booking');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentMovie.title,
        text: `Check out ${currentMovie.title} on BookMyShow!`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="movie-details-page">
      <div className="hero-section">
        <img src={currentMovie.image} alt={currentMovie.title} className="hero-image" />
        <div className="hero-content">
          <Container>
            <Row>
              <Col md={8}>
                <h1>{currentMovie.title}</h1>
                <div className="movie-meta">
                  <span className="rating">{currentMovie.rating}</span>
                  <span>{currentMovie.duration}</span>
                  <span>{currentMovie.language}</span>
                </div>
                <div className="action-buttons">
                  <Button variant="primary" onClick={() => setShowTrailer(true)}>
                    <FontAwesomeIcon icon={faPlay} className="me-2" />
                    Watch Trailer
                  </Button>
                  <Button variant="success" onClick={handleBookNow}>
                    <FontAwesomeIcon icon={faTicket} className="me-2" />
                    Book Now
                  </Button>
                  <Button variant="outline-light" onClick={handleShare}>
                    <FontAwesomeIcon icon={faShare} className="me-2" />
                    Share
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={toggleFavorite}
                    className={isFavorite ? 'active' : ''}
                  >
                    <FontAwesomeIcon icon={faHeart} className="me-2" />
                    {isFavorite ? 'Favorited' : 'Favorite'}
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <h2>About the Movie</h2>
            <p>{currentMovie.description}</p>
            
            <h2 className="mt-4">Cast</h2>
            <div className="cast-list">
              {currentMovie.cast.map((actor, index) => (
                <span key={index} className="cast-member">{actor}</span>
              ))}
            </div>

            <h2 className="mt-4">Director</h2>
            <p>{currentMovie.director}</p>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h3>Movie Details</h3>
                <ListGroup variant="flush" className="movie-info-list">
                  <ListGroup.Item><strong>Release Date:</strong> {currentMovie.releaseDate}</ListGroup.Item>
                  <ListGroup.Item><strong>Genre:</strong> {currentMovie.genre}</ListGroup.Item>
                  <ListGroup.Item><strong>Duration:</strong> {currentMovie.duration}</ListGroup.Item>
                  <ListGroup.Item><strong>Language:</strong> {currentMovie.language}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="mt-4">Gallery</h2>
        <Row className="gallery">
          {currentMovie.gallery.map((image, index) => (
            <Col key={index} xs={6} md={3} className="mb-3">
              <div className="gallery-item" onClick={() => handleImageClick(image)}>
                <img src={image} alt={`${currentMovie.title} ${index + 1}`} className="gallery-image" />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Trailer Modal */}
      <Modal show={showTrailer} onHide={() => setShowTrailer(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{currentMovie.title} - Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              src={currentMovie.trailerUrl}
              title={`${currentMovie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      {/* Image Modal */}
      <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{currentMovie.title} - Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt={currentMovie.title} className="img-fluid" />
        </Modal.Body>
      </Modal>

      {/* Booking Modal */}
      <Modal show={showBooking} onHide={() => setShowBooking(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Tickets for {currentMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Booking functionality will be implemented here...</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieDetails; 