import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Success = () => {
  const [session, setSession] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const sessionId = query.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/veminto/success/${sessionId}`
        );
        setSession(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    if (sessionId) {
      fetchSession();
    }
  }, [sessionId]);

  return (
    <div>
      <h1>Payment Successful</h1>
      {session ? (
        <div>
          <p>Thank you for your purchase!</p>
          <p>Transaction ID: {session.id}</p>
          <p>
            Amount: {session.amount_total / 100}{" "}
            {session.currency.toUpperCase()}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Success;
