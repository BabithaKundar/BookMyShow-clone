import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Events from './pages/Events';
import Sports from './pages/Sports';
import Movies from './pages/Movies';
import BookingPage from './pages/BookingPage';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
