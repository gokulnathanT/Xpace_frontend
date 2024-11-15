import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios GET request to the API
    axios.get('http://localhost:8081/api/Journey',{
        headers: {
            'Content-Type': 'application/json'
        }
    })
      .then(response => {
        // Axios automatically parses the JSON response, no need for .json() method
        setData(response.data);  // Set the data from the response
      })
      .catch(error => {
        // Handle errors
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Truck Number</th>
            <th>Start</th>
            <th>End</th>
            <th>Total Capacity</th>
            <th>Available Capacity</th>
            <th>Driver ID</th>
            <th>Stops</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((truck) => (
            <tr key={truck.id}>
              <td>{truck.id}</td>
              <td>{truck.truck_no}</td>
              <td>{truck.start}</td>
              <td>{truck.end}</td>
              <td>{truck.total_capacity}</td>
              <td>{truck.available_capacity}</td>
              <td>{truck.driver_id}</td>
              <td>{[truck.t1, truck.t2, truck.t3, truck.t4].filter(Boolean).join(', ')}</td>
              <td>{truck.s_Date}</td>
              <td>{truck.e_Date}</td>
              <td><button onClick={() => handleDetails(truck.id)}>Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function handleDetails(id) {
  console.log("Fetching details for truck with ID:", id);
  // You can add further logic here
}

export default Dashboard;
