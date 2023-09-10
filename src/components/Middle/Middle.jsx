import"./middle.css";
import{LandingPage}from"./LandingPage/LandingPage.jsx";
import{StephenPage}from"./StephenPage/StephenPage.jsx";
import{TrainingProgramPage}from"./TrainingProgramPage/TrainingProgramPage.jsx";
import{HorsesReviewsPage}from"./HorsesReviewsPage/HorsesReviewsPage.jsx";
import{ContactUs}from"./ContactUs/ContactUs.jsx";

const Middle=(props)=>{
    return(
        <>
            <LandingPage stephenClicked={props.stephenClicked} />
            <StephenPage stephenClicked={props.stephenClicked} />
            <TrainingProgramPage />
            <HorsesReviewsPage />
            <ContactUs />
        </>
    );
    };
export{Middle};