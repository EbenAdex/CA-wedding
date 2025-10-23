import React from "react";

const personnelList = [
  {
    name: "Ayomide Christopher",
    relationship: "Bride’s Brother",
    phone: "+234 814 878 1611",
    email: "NIL",
    notes: "Available for venue directions and hotel inquiries.",
  },
  {
    name: "Damilola Balogun",
    relationship: "Groom’s Sister",
    phone: "+234 815 541 4274",
    email: "NIL",
    notes: "Coordinates arrangements for guests.",
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-intro">
        This page is your communication hub. Whether you're RSVPing late,
        need directions, or have a question for the couple, use the details
        below to connect with the right person.
      </p>


      <hr style={{ margin: "2rem 0" }} />

      <h3 className="contact-heading">Wedding Support Personnel</h3>
      <div className="contact-list">
        {personnelList.map((person, index) => (
          <div className="contact-card" key={index}>
            <h3>{person.name}</h3>
            <p><strong>Relationship:</strong> {person.relationship}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Notes:</strong> {person.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
