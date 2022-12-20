import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const getStaticProps = async()=>{
  const response = await fetch('https://fakestoreapi.com/products');
  
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
      <Card.Img variant="top" src={item.image} width={200} height={250} />
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