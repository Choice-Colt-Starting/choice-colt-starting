import "./middle.css";
import { LandingPage } from "./LandingPage/LandingPage.jsx";
import { StephenPage } from "./StephenPage/StephenPage.jsx";
import { DaysPage } from "./DaysPage/DaysPage.jsx";
import {ArticlesPage} from "./ArticlesPage/ArticlesPage.jsx";
import { HorsesReviewsPage } from "./HorsesReviewsPage/HorsesReviewsPage.jsx";

const Middle = ({ pages, setArticlesPage }) => {

    return(
        <>
            <LandingPage 
                landingPageClicked={pages.landingPageClicked} 
                setArticlesPage={setArticlesPage}  
            />
            <StephenPage stephenClicked={pages.stephenClicked} />
            <DaysPage daysClicked={pages.daysClicked} />
            <ArticlesPage articlesClicked={pages.articlesClicked} />
            <HorsesReviewsPage horsesReviewsClicked={pages.horsesReviewsClicked} />
        </>
    );
};

export { Middle };