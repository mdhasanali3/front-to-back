import React from "react";
import { useEffect,useState } from "react";
import { useSelector ,useDispatch } from "react-redux";

export const SeeDetail = (props) => {
 let meetings = useSelector((state) => state.allmeeting.meetings);
    const [toggle_details,setToggle_details] = useState(false);

  const onDetailsBtnClick = () =>{
    setToggle_details(!toggle_details);
    console.log(toggle_details);
}
return( 

<div className="meetup-actions">
<button className="btn" onClick={()=>onDetailsBtnClick()}>More Details</button>


{toggle_details?
<div>
<article>
{/* <img src="" alt=""> */}

<section id="details">
<h3>{meetings.title[props.mid]} </h3>

<section id="location">
<h2>Meetup Location</h2>
<address>This meetup takes place in <span>{meetings.description[props.mid]}</span> </address>
</section>

<footer>
    <p>Need more details? Please <a href="">contact the organizer</a> (but don't spam us)</p>
</footer>
</section>


</article>
</div>
:""}
</div>
)}