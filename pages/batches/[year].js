import React from 'react'

export const getStaticPaths = async()=>{
    // const arr = ["2022", "2021", "2020", "2019"];
    const response = await fetch(process.env.API_URL);
    const arr = await response.json();
    const paths = arr.map((item)=>{
        return {
            params : { year : item.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context)=>{
    // console.log(context.params);
    const temp = context.params.year;
    const response = await fetch(process.env.API_URL+temp);
    const data = await response.json();

    return{
        props: {
            res:data,
            notFound: true
            
        }
    }

}

const year = ({res}) => {
    // console.log('res' - res);
  return (
    <>
    <div className="row">
    <div className='col-md-8'>
    <div> <h4>Batch Page - {res.title} </h4></div>
    <div> {res.price} </div>
    <div> {res.category} </div>
    </div>
    <div classname='col-md-4'> <img src = {res.image}  width='300'/></div>
    </div>
   
    
    </>
  )
}

export default year;