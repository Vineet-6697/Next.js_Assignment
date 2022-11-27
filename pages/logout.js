import React from 'react'
import styles from "../styles/login.module.css"

const register = () => {
  return (
    <>
     <h3 className='text-center'>Logout</h3>
    <div className={styles.center_div}>
       
    <div className="text-center  mt-2 mb-2">
    <label > User Name : </label>
    <input  placeholder=' type your name here'/>  <br /> <br />
    <label> Password : </label>
    <input  placeholder=' type your name here'/> 
    </div>
    </div>
    </>
  )
}

export default register