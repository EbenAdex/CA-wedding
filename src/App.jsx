import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import weddingDay from './videos/weddingDay.mp4';
import EventSchedule from './components/EventSchedule';
import Contact from './pages/Contact';
import './App.css';
import Rsvp from './pages/Rsvp';
import Admin from './pages/Admin';
import ThankYou from './pages/ThankYou';
import Gallery from './pages/Gallery';
import BackgroundVideoControl from './components/BackgroundVideoControl';
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <video
        id="backgroundVideo"
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src={weddingDay} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <BackgroundVideoControl />
        <div className="content-wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="events" element={<EventSchedule />} />
              <Route path="/rsvp" element={<Rsvp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
