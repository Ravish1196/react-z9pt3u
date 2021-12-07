import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Component1 = ({name,course}) => {
  return (
   <div> 
  <h1>hello {name} {course} </h1>
  <button onClick={()=>{clickHandler(name)}}>Click me</button>
  </div>
  )
}

function clickHandler(name){
  console.log("Clicked",name)
}

Component1.propTypes = {
  name:PropTypes.string,
  course:PropTypes.string.isRequired
}

Component1.defaultProps = {
  name:"Raish",
  course:"JS"
}

export {Component1}
