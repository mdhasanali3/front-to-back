import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMeeting } from "../store/actions/mactions";
import { AddMeeting } from "./AddMeeting";
import { SeeDetail } from "./SeeDetail";

const MeetupComponent = () => {
 let meetings = useSelector((state) => state.allmeeting.meetings);

  console.log(meetings)
  const dispatch= useDispatch();

  meetings=[meetings]
  console.log(meetings)

  if(Object.keys(meetings[0]).length >0)
  {

      return(
    
          <>
            {meetings.map((meet) => {
     
       return(
      <div>
      <div className="metaprice">{meet.description.map((des,mid)=>(<div>
                
        <div key={mid}>
         <section> 
       
             <ol>
                 
             <li className="meetup-item"> 
         <article>
             <div className="meetup-summary">
                 <div className="meetup-image">
                     <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                 </div>
                 <div className="meetup-details">
                
                 
         {/* <p>render meet up</p> */}
       
       {/* <div className="metaprice">{description.map(des=>(<div>
         {des}
         </div>))}</div>  */}
       
       <div className="four wi column" >
                 <div className="u link cards">
                   <div className="card">
                    
                     <div className="content">
                       <p>this is your  {mid} meeting</p>
                       <h4>{meet.title[mid]}</h4>
                       <h4>{meet.description[mid]}</h4>
                     
                       </div>
                   </div>
                 </div>
             </div>
        
         
                 </div>
             </div> 
          
       <SeeDetail mid={ mid } />
     
     <AddMeeting />
     
         </article>
         </li>    
             </ol> 
         </section>
       
        
       
         </div>
       
          </div>))}
          
          </div> 
      </div>
        )
              })}
              
        </>           
                        
         )
       }
         else
         return( <p>empty object</p>)
       
};

export default MeetupComponent;