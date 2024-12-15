import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Data} from '../Data/Data'
import './Journeys.css';
function Dashboard() {
   const[data,setData]=useState([]);
   const[error,setError]=useState(null);
   
   useEffect(()=>{
     async function getData(){
       try{
         const journey=await Data();
         setData(journey);
       }
       catch(err){
         setError(err.message);
       }
     }
     getData();
   },[]);

  return (
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
  );
}

function handleDetails(id) {
  console.log("Fetching details for truck with ID:", id);
  // You can add further logic here
}

export default Dashboard;
