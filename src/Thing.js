import React from 'react';

export default function Thing(props) {
  
 return(
   <div>
     <h2>{props.title}</h2>
     <p>{props.message}</p>
   </div>
 );
}