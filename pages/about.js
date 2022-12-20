import React from 'react'

import  styles from "../styles/About.module.scss"

export const getStaticProps = async()=>{
  const response = await fetch('https://fakestoreapi.com/products');
  
  const data = await response.json();
  return{
    props:{productData: data}
  }
}

const about = (props) => {
  const {productData} = props;
  return (
    <>
    <div className={styles.next_text} > <h1>About </h1></div>
    {productData.map(item =>(
      <>
      <div className="row ">
      <div className="col-md-6  ">
      <div className='bg-secondary'> {item.id}</div>
      <div className='bg-info'> {item.title}</div>
      <div  className='bg-warning'> {item.description}</div>
      <div  className='mb-5 bg-success'> {item.category}</div>
      <div > <img className='' src={item.image} width='250' height='300' /></div>
      <div > Rating : {item.rating.rate}  Count : {item.rating.count} </div>
      </div>
      </div>
      </>
     
     
    )
    )}
    </>
    
    )
}

export default about