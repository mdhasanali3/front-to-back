// import React, { useEffect, useCallback, useMemo } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setMeeting } from "../store/actions/mactions";
// import MeetupComponent from "./MeetupComponent";

// const MeetingPage = () => {
//   const meetings = useSelector((state) => state.allmeetings.meetings);
//   const dispatch = useDispatch();
//   const fetchmeetings = async () => {
//     const response = await axios
//       .get("http://localhost:5000/")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setMeeting(response.data));
//   };

//   useEffect(() => {
//     fetchmeetings();
//   }, []);

//   console.log("meetings :", meetings);
//   return (
//     <div className="ui grid container">
//       <MeetupComponent />
//     </div>
//   );
// };

// export default MeetingPage;
