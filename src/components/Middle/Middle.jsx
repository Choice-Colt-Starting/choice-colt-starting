import"./middle.css";
import{LandingPage}from"./LandingPage/LandingPage.jsx";

const Middle=(props)=>{
    return(
        <LandingPage stephenClicked={props.stephenClicked} />
    );
    };
export{Middle};