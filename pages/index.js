import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'


export const getStaticProps = async()=>{
  const response = await fetch(process.env.API_URL);
  
  const data = await response.json();
  return{
    props:{productData: data}
  }
}

const Products = (props) => {
  const {productData} = props;
  return (
    <>
    {productData.map(item =>(
    <>
    
    <Card style={{ width:'19.5rem' }} className=' d-inline-flex mt-3   ms-3 '>
    <Link href={`/productsid/${item.id}`}>
      <Card.Img variant="top" src={item.image} width={200} height={250} /> </Link>
      <Card.Body>
        <Card.Title>{item.title.substr(0, 20)}</Card.Title>
        <Card.Text className='fs-5 text fst-italic'>
        {item.category}
        </Card.Text>
        <Card.Text>
        {item.description.substr(0, 90)} ...
        </Card.Text>
        <div className="row">
        <div className='fw-bold  col' > Price : {item.price} </div>
        <div className='fw-bold  col' > Rating : {item.rating.rate} </div>
        </div>
        <Button variant="primary" className='mt-2'>Add to Cart</Button>
      </Card.Body>
    </Card>
   
    </>
  ))
  
}
</>)}

export default Products