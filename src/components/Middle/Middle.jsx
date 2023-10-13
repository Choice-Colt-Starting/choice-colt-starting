import"./middle.css";
import{LandingPage}from"./LandingPage/LandingPage.jsx";
import{StephenPage}from"./StephenPage/StephenPage.jsx";
import{TrainingProgramPage}from"./TrainingProgramPage/TrainingProgramPage.jsx";
import{HorsesReviewsPage}from"./HorsesReviewsPage/HorsesReviewsPage.jsx";

const Middle=({ state })=>{
    return(
        <>
            <LandingPage landingPageClicked={state.landingPageClicked}  />
            <StephenPage stephenClicked={state.stephenClicked} />
            <TrainingProgramPage trainingProgramClicked={state.trainingProgramClicked} />
            <HorsesReviewsPage horsesReviewsClicked={state.horsesReviewsClicked} />
        </>
    );
    };
export{Middle};