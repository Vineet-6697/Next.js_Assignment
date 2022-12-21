import React from 'react'

export const getServerSideProps = async(context) =>{
  const id = context.params.id;
 
  const response = await fetch(process.env.API_URL+id);
  const data = await response.json();
  return{
    props: {productdata  :data}
  }

}

const Productid = (productdata) => {
  
     console.log('productdata'- productdata);
  return (
    <>
    <div className="row">
    <div className="text-center col-md-6">
    <div> <h4>Batch Page - {res.title} </h4></div>
    <div> {res.price} </div>
    <div> {res.category} </div>
    </div>
    <div classname='col-md-4'> <img  src = {res.image}  width='300'/></div>
    </div>
    </>
  )
}

export default Productid;