import React from "react";
import styles from "../../styles/global.module.css";

export const getStaticPaths = async () => {
  // const arr = ["2022", "2021", "2020", "2019"];
  const response = await fetch(process.env.API_URL);
  const arr = await response.json();
  const paths = arr.map((item) => {
    return {
      params: { year: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // console.log(context.params);
  const temp = context.params.year;
  const response = await fetch(process.env.API_URL + temp);
  const data = await response.json();

  return {
    props: {
      res: data,
      notFound: true,
    },
  };
};

const year = ({ res }) => {
  // console.log('res' - res);
  return (
    <>
      <div className={styles.listing_page}>
      <div classname="col-md-3 ">
         
         <img src={res.image} className='ms-5 ps-5' width="500 px" />
       </div>
        <div className="col-md-5 mt-5 offset-1">
          <div>
           
            <h4> {res.title} </h4> <br />
            <p> {res.description} </p> <br />

          </div>
          <div className="row">
        <div className='fw-bold  col' > Price : {res.price} </div>
        <div className='fw-bold  col' > Rating : {res.rating.rate} </div>
        </div> <br />
          <div className="fw-bold">  Category  : {res.category} </div>  <br />
          <button className="btn btn-success  mb-5"> Add to cart</button> 
        </div>
        
       
      </div>
    </>
  );
};

export default year;
