import { NavBtn } from "./NavBtn/NavBtn";
import "./navBtns.css";

function NavBtns({
    pages,
    setLandingPage,
    setStephenPage,
    setDaysPage,
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
                isClicked={pages.daysClicked}
                onClick={() => setDaysPage()}
            />
            <NavBtn
                title={'Reviews'}
                isClicked={pages.horsesReviewsClicked}
                onClick={() => setHorsesReviewsPage()}
            />
        </div>
    );
};

export{NavBtns};