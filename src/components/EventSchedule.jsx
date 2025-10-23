// /src/components/EventSchedule.jsx
import React from 'react';
import eventSchedule from '../data/eventSchedule';

const EventSchedule = () => {
  return (
    <section className="event-schedule">
      <h2>Wedding Events</h2>
      <div className="event-list">
        {eventSchedule.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            {event.dressCode && <p><strong>Dress Code:</strong> {event.dressCode}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSchedule;
