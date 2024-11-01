import React from 'react'
import { useState } from 'react'


const User = ({name}) =>{

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Hyd</h2>
      <h2>Contact: @teja.com</h2>
    

    </div>
  )
}

export default User;
