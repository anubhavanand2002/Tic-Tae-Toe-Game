import React from 'react'
import './Box.css';
const Box = (props) => {
    const a=Number(props.wid);
    const b=Number(props.hei);
  return (
    <div>
      <div className='border' style={{width:a , height:b}} id={props.id} onClick={()=>{props.onclick(props.id)}}>
        {props.children}
        <h1 className='display'>{props.value}</h1>
      </div>
    </div>
  )
}

export default Box
