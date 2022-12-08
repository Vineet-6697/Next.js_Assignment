import React, { useEffect } from 'react';
import {useRouter} from 'next/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(() => {
            
        },3000)
    }, [])

    return (
        <div>
            <h2>Page Not Found. Plz check url.</h2>
        </div>
    )
}

export default NotFound
