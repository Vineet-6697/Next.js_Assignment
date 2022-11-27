import React from 'react'
import styles from "../styles/login.module.css"

const register = () => {
  return (
    <>
     <h3 className='text-center'>Register</h3>
    <div className={styles.center_div}>
       
    <div className="text-center  mt-2 mb-2">
    <label > First Name : </label>
    <input  placeholder=' Type your  first name here'/>  <br /> <br />
    <label> Last Name : </label>
    <input  placeholder=' Type your  last name here'/> <br /> <br />
    <label > E-Mail : </label>
    <input  placeholder=' '/>  <br /> <br />
    <label> Password : </label>
    <input  placeholder=' '/> <br /> <br />
    <label> Phone No. : </label>
    <input  placeholder=' '/> 
    </div>
    </div>
    </>
  )
}

export default register