import React, { useState } from 'react'

const RecipeSharingApp = () => {
    let [name,setName]=useState("")
    let [imag,setimag]=useState("")
    let [desc,setDesc]=useState("")
    let [username,setUsername]=useState("")

  return (
    <div>
        <h2>RecipeSharingApp</h2>
        <input type="text" placeholder='Enetr recipe name'  onChange={(e)=>setName(e.target.value)}/>
        <input type="text"  placeholder="Enter recipe images" onChange={(e)=>setimag(e.target.value)}/>
        <input type="text" placeholder='enter recipe Description' onChange={(e)=>setDesc(e.target.value)}/>
        <input type="text"  placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
        
    </div>
  )
}

export default RecipeSharingApp