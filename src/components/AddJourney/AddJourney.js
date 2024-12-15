import {useState} from "react";
import "./AddJourney.css";
import axios from "axios";



export default function AddJourney(){
    const [journeyData,setJourneyData]=useState({
    truck_no: '',
    start:'',
    end: '',
    available_capacity: '',
    driver_id: '',
    total_capacity: '',
    t1: '',
    t2:'',
    t3: '',
    t4: '',
    s_Date: '',
    e_Date: '',
  
    });
     
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setJourneyData((prev)=>({
            ...prev,
            [name]:value,
        }));
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response =await axios.post('http://localhost:8081/api/Journey',journeyData,{
                headers:{
                    'Content-Type':'application/json',
                }
            });
            console.log("Journey Created successfully ! ",response.data);
        }
        catch(error){
            console.error('Error in creating journey',error);
        }
    }

    return (
      <>
        <div className="add-journey">
          <h1>Add Journey !</h1>
          <form method="post" onSubmit={handleSubmit} className="form">
            <h2>Journey Details</h2>
            <div className="form__group form__group--inline">
              <label htmlFor="truck-no" className="form__label">
                Truck No:
              </label>
              <input
                required
                type="number"
                name="truck_no"
                value={journeyData.truck_no}
                id="truck-no"
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="start" className="form__label">
                Start :
              </label>
              <input
                required
                type="text"
                name="start"
                id="start"
                value={journeyData.start}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="end" className="form__label">
                End :
              </label>
              <input
                required
                type="text"
                name="end"
                value={journeyData.end}
                onChange={handleChange}
                id="end"
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="avail-capacity" className="form__label">
                available_capacity :
              </label>
              <input
                required
                type="number"
                name="available_capacity"
                id="avail-capacity"
                value={journeyData.available_capacity}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="total-capacity" className="form__label">
                Total capacity:
              </label>
              <input
                required
                type="number"
                name="total_capacity"
                value={journeyData.total_capacity}
                onChange={handleChange}
                id="total-capacity"
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="tp1" className="form__label">
                Touch point 1 :
              </label>
              <input
                type="text"
                name="t1"
                value={journeyData.t1}
                onChange={handleChange}
                id="tp1"
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="tp2" className="form__label">
                Touch point 2 :
              </label>
              <input
                type="text"
                name="t2"
                id="tp2"
                value={journeyData.t2}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="tp3" className="form__label">
                Touch point 3 :
              </label>
              <input
                type="text"
                name="t3"
                id="tp3"
                value={journeyData.t3}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="tp4" className="form__label">
                Touch point 4 :
              </label>
              <input
                type="text"
                name="t4"
                id="tp4"
                value={journeyData.t4}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="start-date" className="form__label">
                Start date :
              </label>
              <input
                required
                type="date"
                name="s_Date"
                id="start-date"
                value={journeyData.s_Date}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="name" className="form__label">
                End date :
              </label>
              <input
                required
                type="date"
                name="e_Date"
                id="end-date"
                value={journeyData.e_Date}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <div className="form__group form__group--inline">
              <label htmlFor="driver-id" className="form__label">
                Driver ID:
              </label>
              <input
                required
                type="text"
                name="driver_id"
                id="driver-id"
                value={journeyData.driver_id}
                onChange={handleChange}
                className="form__input form__input--no-border-radius"
              />
            </div>
            <button type="submit" className="btn btn--primary">
              Create Journey
            </button>
          </form>
        </div>
      </>
    );
}