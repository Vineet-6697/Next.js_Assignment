import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import styles from "../styles/login.module.css";

export const getStaticProps = () => {
    let url = process.env.BASE_URL;
    return {
        props: {
            baseurl: url
        }
    }
}

const Registration = (props) => {

    const [formdata, setFormdata] = useState({});
    const [errorformdata, setErrorFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const router = useRouter();
    const {baseurl} = props;
    console.log('baseurl', baseurl);

    const registerFn = async () => {
        const validationStatus = validate();
        if(validationStatus) {
            console.log('formdata', formdata, process.env.BASE_URL);
            const url =  baseurl + 'api/users/register'
            try{
                const response = await axios.post(url, formdata);
                console.log(response.data);
                if(response.status === 201) {
                    setSubmitStatus(true);
                 
                    router.push('/login');
                }
            }
            catch{

            }
            
        }
    }

    const validate = () => {
        if(formdata.mobile) {
            if(formdata.mobile.length >5) {
              
                return true;
            }
            else {
                let tempObj = {}
                tempObj['mobile'] = 'Mobile length not sufficient';
                setErrorFormdata({...errorformdata, ...tempObj});
                return false;
            }
        }
        else {
            let tempObj = {}
            tempObj['mobile'] = 'Mobile can not be empty';
            setErrorFormdata({...errorformdata, ...tempObj});
            return false;
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let tempObj = {};
        tempObj[e.target.name] = e.target.value;
        setFormdata({...formdata, ...tempObj});
    }

    useEffect(() => {
        console.log('errors', errorformdata);
    })

  return (
    <div>

        {submitStatus && (
            <div class="alert alert-success" role="alert">
                Form submitted.
            </div>
        )}
       
         <div className={styles.center_div}>
            <h3 className='mb-4 text-center'> Registeration</h3>
         <input type="text" name="name" className='form-control' placeholder='Name' onChange={handleChange} />
        <span className='text-danger'>{errorformdata.name}</span>
       <br /> 
         <input type="email" name="email" className='form-control' placeholder='Enter E-mail' onChange={handleChange} />
        <span className='text-danger'>{errorformdata.email}</span>
        <br /> 
         <input type="text" name="mobile" className='form-control' placeholder='Mobile Number' onChange={handleChange} />
        <span className='text-danger'>{errorformdata.mobile}</span>
        <br /> 
         <input type="password" name="password" className='form-control' placeholder='Password' onChange={handleChange} />
        <span className='text-danger'>{errorformdata.password}</span>
        <br /> 
        <button className='btn btn-warning' onClick={registerFn}>Submit</button>
        </div>

      
    </div>
  )
}

export default Registration
