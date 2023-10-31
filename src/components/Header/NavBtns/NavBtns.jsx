import { NavBtn } from "./NavBtn/NavBtn";
import "./navBtns.css";

function NavBtns({
    pages,
    setLandingPage,
    setStephenPage,
    setTrainingProgramPage,
    setHorsesReviewsPage }) {

    return (
        <div id="navBtnsParentDiv">
            <NavBtn
                title={'Home'}
                isClicked={pages.landingPageClicked}
                onClick={() => setLandingPage()}
            />
            <NavBtn
                title={'Meet Stephen'}
                isClicked={pages.stephenClicked}
                onClick={() => setStephenPage()}
            />
            <NavBtn
                title={'Training Program'}
                isClicked={pages.trainingProgramClicked}
                onClick={() => setTrainingProgramPage()}
            />
            <NavBtn
                title={'Horses and Reviews'}
                isClicked={pages.horsesReviewsClicked}
                onClick={() => setHorsesReviewsPage()}
            />
        </div>
    );
};

export{NavBtns};