import "./middle.css";
import { LandingPage } from "./LandingPage/LandingPage.jsx";
import { StephenPage } from "./StephenPage/StephenPage.jsx";
import { DaysPage } from "./DaysPage/DaysPage.jsx";
import {ArticlesPage} from "./ArticlesPage/ArticlesPage.jsx";
import {HorsesPage} from "./HorsesPage/HorsesPage.jsx";
import { HorsesReviewsPage } from "./HorsesReviewsPage/HorsesReviewsPage.jsx";

const Middle = ({ 
    pages, 
    setArticlesPage,
    setHorsesPage }) => {

    return(
        <div>
            <LandingPage 
                landingPageClicked={pages.landingPageClicked} 
                setArticlesPage={setArticlesPage}
                setHorsesPage={setHorsesPage}  
            />
            <StephenPage stephenClicked={pages.stephenClicked} />
            <DaysPage daysClicked={pages.daysClicked} />
            <ArticlesPage articlesClicked={pages.articlesClicked} />
            <HorsesPage horsesClicked={pages.horsesClicked} />
            <HorsesReviewsPage horsesReviewsClicked={pages.horsesReviewsClicked} />
        </div>
    );
};

export { Middle };