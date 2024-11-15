import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Journeys.css';
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
    <div className='grid-container'>
      <Navbar/>
      {error && <p>Error: {error}</p>}
      <div className='grid'>
            {data.map((journey)=>(
              <div className='card-main' key={journey.id} style={{
                  width: "270px",
                  height: "280px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor:"#F9EFDB",
                  // gap:"10px",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
              }}>
                <div className='card-body'
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "10px",
                  }}>
                    <h5 className='card-title' style={{margin: "0 0 10px 0", fontSize: "1.2rem"}}>
                      ID : {journey.id}
                      </h5>
                      <div className='idx'>
                        <div className='text'>
                          <h4>
                                Truck Id: {journey.truck_no} 
                        </h4>
                        </div>
                        <div className='text'>
                          <h4>
                                Driver_id: {journey.driver_id}
                          </h4>
                          </div>
                        </div>
                      <i className='card-trip'>
                      Destination : {journey.start} to {journey.end}
                      </i>
                    <p>
                        Schedule : {journey.s_Date} to {journey.e_Date}
                      </p>
                    
                  </div>
                  <div className='view-button' id='view'>
                    <button > view </button>
                  </div>
            </div>
            ))}

          </div>
    </div>
  );
}

function handleDetails(id) {
  console.log("Fetching details for truck with ID:", id);
  // You can add further logic here
}

export default Dashboard;
