// /src/pages/EventPage.jsx
import React from 'react';
import EventSchedule from '../components/EventSchedule';

const EventPage = () => {
  return (
    <div className="event-page">
      <h1>Wedding Events</h1>
      <EventSchedule />
    </div>
  );
};

export default EventPage;
