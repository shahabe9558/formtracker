import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
   const navigate = useNavigate();
    function clickHandler(){
      navigate('/')
    }
    return(
        <div>
          About Page

          <button onClick={clickHandler}>Back To Home</button>
        </div>
    );
}
export default About;