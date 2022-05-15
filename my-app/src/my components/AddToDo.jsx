import React, { useState } from 'react'





const AddToDo = (props) => {

    var inputStyle={
        margin:"30px",
        width:"30%",
    }
    
    var textFieldHeadStyle={
        padding:"10px",
        borderRadius:"10px",
        marginBottom:"20px",
        color:"white"
    }
    

    var hrStyle = {
        width: "30%"
      }
    

    const [item, setItem]=useState("");
    const [time, setTime]=useState("");
    

    const onAdd=(e)=>{
        console.log("click");
      if(!item|| !time){
          alert("KINDLY FILL THE FIELDS")
          return;
      }

      props.addToDo(item,time);
      setItem("");
      setTime("");
      }

      
    return (
        <center>
       <div className="container-fluid" style={inputStyle}>
       <h2 className="bg-dark" style={textFieldHeadStyle} >Add To Do Item</h2>
            <form className="d-flex">
              <input className="form-control me-2" value={item} onChange={(e)=>{setItem(e.target.value)}} type="text" placeholder="Add To do Item" />
              <input className="form-control me-2" value={time} onChange={(e)=>{setTime(e.target.value)}} type="text" placeholder="Add Time" />
              <button onClick={()=>{onAdd()}} className="btn btn-outline-success" type="button">Add</button>
            </form>

        </div>
        <hr style={hrStyle} />
        </center>
    )
}

export default AddToDo
