import React from 'react'

export default function Alert(props) {
    //To make first letter capital of the warning type
const capitalize = (word)=>{
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    <div style = {{height:'50px'}}>
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert">
      <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
      
    </div>
  );
}

//If we use && the the left of && will evaluate first if it is true then 
//right part will evaluate
