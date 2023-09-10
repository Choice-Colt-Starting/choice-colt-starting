import"./middle.css";
import{LandingPage}from"./LandingPage/LandingPage.jsx";
import{StephenPage}from"./StephenPage/StephenPage.jsx";
import{TrainingProgramPage}from"./TrainingProgramPage/TrainingProgramPage.jsx";
import{HorsesReviewsPage}from"./HorsesReviewsPage/HorsesReviewsPage.jsx";
import{ContactUs}from"./ContactUs/ContactUs.jsx";

const Middle=(props)=>{
    return(
        <>
            <LandingPage landingPageClicked={props.landingPageClicked}  />
            <StephenPage stephenClicked={props.stephenClicked} />
            <TrainingProgramPage trainingProgramClicked={props.trainingProgramClicked} />
            <HorsesReviewsPage horsesReviewsClicked={props.horsesReviewsClicked} />
            <ContactUs contactUsClicked={props.contactUsClicked} />
        </>
    );
    };
export{Middle};