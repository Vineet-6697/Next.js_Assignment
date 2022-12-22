import React from "react";
import styles from "../styles/login.module.css";

const about = () => {
  return (
    <div>
      <div className={styles.bannerabout}>
        <h1 className=" pt-5 ms-5 ps-5  text-light ">About-Us</h1>
      </div>
      <div className="col-md-7 offset-1">
      <h1 className=" mt-5">
        Thank you for visiting Courageous Brand  Products Web
        site.
      </h1>
      <p className="pb-5 me-5 mt-5 ">
        Courageous is a leading manufacturer of trending wear products and we are proud
        of our product line and the benefits it gives to peoples world wide.
        For over 50 years, Courageous has been the first choice of consumers when
        purchasing products . It is the brand people trust
        to aid in the well-being of their styles/looking. We have an exceptional
        workforce: dedicated, loyal employees who enjoy working in the
        motivating and challenging work environment at Courageous. 
         Our commitment to you is to provide products with incomparable
        quality and performance to ensure the latest trends and hight quality and value for money. 
      </p>
      </div>
    </div>
  );
};

export default about;
