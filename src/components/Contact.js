import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    console.log("useEffect")
    return ()=> {
      console.log("UseEffect returned")
    }
  })
  return <div className="contact">
    <h1>Contact Us Page</h1>
  </div>;
};

export default Contact;
