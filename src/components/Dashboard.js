import React, { useState, useEffect } from "react";
import { apiData } from "../constants";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(apiData);
    } catch (err) {
      setError("Failed to load data");
    }
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}

      <div className="card-container">
        {data.map((journey) => (
          <div className="card" key={journey.id}>
            <div className="card-header">
              <h4>{journey.id}</h4>

              <p>
                {journey.start} to {journey.end}
              </p>
            </div>
            <div className="card-details">
              <h4>
                {journey.available_capacity} / {journey.total_capacity}
              </h4>
            </div>
            <div className="card-footer">
              <p>
                {journey.s_Date} to {journey.e_Date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
