import React from 'react';
import {useRouter} from 'next/router';
import Nav from 'react-bootstrap/Nav';

const Head1 = () => {
  const router = useRouter();

  const logoutFn = () => {
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    router.reload('/courses');
  }
  return (
    <div className='col-3'>
       
        {/* <button onClick={logoutFn}>Logout</button> */}
        <Nav.Link onClick={logoutFn} href='/logout'>Logout</Nav.Link>
    </div>
  )
}

export default Head1