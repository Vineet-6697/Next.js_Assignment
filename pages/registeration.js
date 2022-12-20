import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import styles from "../styles/login.module.css";

export const getStaticProps = () => {
    let url = 'http://localhost:3000/';
    return {
        props: {
            baseurl: url
        }
    }
}

const Registration = (props) => {

    // const initilObj = {
    //     name: '',
    //     email: '',
    //     mobile: '',
    //     password: ''
    // }
    const [formdata, setFormdata] = useState({});
    const [errorformdata, setErrorFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const router = useRouter();
    const {baseurl} = props;
    console.log('baseurl', baseurl);

    const registerFn = async () => {
        const validationStatus = validate();
        if(validationStatus) {
            console.log('formdata', formdata, 'http://localhost:3000/');
            const url =  'http://localhost:3000/api/users/register';
            try{
                const response = await axios.post(url, formdata);
                console.log(response.data);
                if(response.status === 201) {
                    setSubmitStatus(true);
                    //setFormdata(initilObj);
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
                //remove error for mobile field
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
        {/* <form action="api/login">
            input elements
            <button type='submit'></button>
        </form> */}
         <div className={styles.center_div}>
        Name : <input type="text" name="name" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.name}</span>
       <br /> <br />
        Email : <input type="email" name="email" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.email}</span>
        <br /> <br />
        Mobile : <input type="text" name="mobile" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.mobile}</span>
        <br /> <br />
        Password : <input type="password" name="password" onChange={handleChange} />
        <span className='text-danger'>{errorformdata.password}</span>
        <br /> <br />
        <button onClick={registerFn}>Submit</button>
        </div>

      
    </div>
  )
}

export default Registration
