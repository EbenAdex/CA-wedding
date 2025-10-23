import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig"; // adjust path if different

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    if (password === "weddingadmin2025") {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  useEffect(() => {
    if (authenticated) {
      const fetchRSVPs = async () => {
        try {
          const rsvpQuery = query(
            collection(db, "rsvps"),
            orderBy("timestamp", "desc")
          );
          const snapshot = await getDocs(rsvpQuery);
          const rsvpList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Fetched docs:", snapshot.docs);
          console.log("Mapped RSVPs:", rsvpList);

          setSubmissions(rsvpList);
        } catch (err) {
          console.error("Error fetching RSVPs:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchRSVPs();
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="admin-login">
        <h2>Admin Access</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h2>RSVP Submissions</h2>
      {loading ? (
        <p>Loading...</p>
      ) : submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Will Attend</th>
              <th>Message</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((rsvp) => (
              <tr key={rsvp.id}>
                <td data-label="Name">{rsvp.name}</td>
                <td data-label="Email">{rsvp.email}</td>
                <td data-label="Will Attend">{rsvp.attendance}</td>
                <td data-label="Message">{rsvp.message}</td>
                <td data-label="Submitted At">
                  {rsvp.timestamp?.toDate().toLocaleString()}
                 </td>
x           </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
