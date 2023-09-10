import"./middle.css";
import{LandingPage}from"./LandingPage/LandingPage.jsx";
import{StephenPage}from"./StephenPage/StephenPage.jsx";

const Middle=(props)=>{
    return(
        <>
            <LandingPage stephenClicked={props.stephenClicked} />
            <StephenPage stephenClicked={props.stephenClicked} />

        </>
    );
    };
export{Middle};