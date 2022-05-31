import { useEffect,useState } from "react";
import "./base.css";
import "./main.css";
import "./meetup-details.css";
import "./add_meeting.css";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setMeeting } from "./store/actions/mactions";
import MeetupComponent from "./components/MeetupComponent";


function App() { 
    let meetings = useSelector((state) => state.allmeeting.meetings);
    // console.log(meetings[0])
  let  mid=-1;
  const fetchmeetings = async () => {
    const response = await axios
        .get("http://localhost:5000/")
        .catch((err) => {
        console.log("Err: ", err);
        });
    dispatch(setMeeting(response.data));
    };
  
    useEffect(() => {
    fetchmeetings();
    }, []);
  
  
    console.log(meetings)
    const dispatch= useDispatch();
  
  
  
    return( <MeetupComponent/>)
  
}

export default App;
