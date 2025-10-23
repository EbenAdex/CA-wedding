import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import RSVP from './pages/Rsvp';
import EventPage from './pages/EventPage';
import ThankYou from './pages/ThankYou';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="thanks" element={<ThankYou />} />
          <Route path="events" element={<EventPage />} />
          <Route path="gallery" element={<Gallery />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;