import React from "react";
import axios from "axios"
import { useEffect,useState } from "react"; 
import { useSelector ,useDispatch } from "react-redux";

export const AddMeeting = () => {

const [toggle_add,setToggle_add] = useState(false);
const dispatch= useDispatch();


const [title,settitle]=useState(false);
const [desc,setdesc]=useState(false);
  const onAddBtnClick = () =>{
    setToggle_add(!toggle_add);

    console.log(toggle_add);
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    var content={
        title:`${title}`,
        description:`${desc}`
    }
        axios.post(`http://localhost:3000/`, content)
    .then(res => console.log(res,' image & label zip res of axios'))
    .catch(err => console.warn(err,'error from image label zip'))
  }

return(
    <div className="meetup-actions">
    <button className="btn" onClick={()=>onAddBtnClick()}>Add Meetup</button>


    {toggle_add?
        <div class="column is-4 is-offset-4 form-group">
        <h3 class="title">Add Meeting</h3>
        <div class="box">
            <form method="POST" onSubmit={handleSubmit} action="/">
                <div class="field">
                    <div class="control">
                        <input onChange={(e)=>settitle(e.target.value)} class="input is-large" type="text" id="title" name="title"  placeholder="title" autofocus=""/>
                    </div>
                </div>
    
                <div class="field">
                    <div class="control">
                        <input onChange={(e)=>setdesc(e.target.value)}class="input is-large" type="text" id="desc" name="description"  placeholder="description" autofocus=""/>
                    </div>
                </div>
    
                <button type="submit"  class="button is-block is-info is-large is-fullwidth " >submit</button>
            </form>
        </div>
    </div>
        :""}
 </div>       
)
    }