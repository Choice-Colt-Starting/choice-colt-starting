import "./middle.css";
import { LandingPage } from "./LandingPage/LandingPage.jsx";
import { StephenPage } from "./StephenPage/StephenPage.jsx";
import { TrainingProgramPage } from "./TrainingProgramPage/TrainingProgramPage.jsx";
import { HorsesReviewsPage } from "./HorsesReviewsPage/HorsesReviewsPage.jsx";

const Middle = ({ pages }) => {

    return(
        <>
            <LandingPage landingPageClicked={pages.landingPageClicked}  />
            <StephenPage stephenClicked={pages.stephenClicked} />
            <TrainingProgramPage trainingProgramClicked={pages.trainingProgramClicked} />
            <HorsesReviewsPage horsesReviewsClicked={pages.horsesReviewsClicked} />
        </>
    );
};

export { Middle };