import { NavBtn } from "./NavBtn/NavBtn";
import "./navBtns.css";

const NavBtns = (
    { 
        landingPageClicked, setLandingPageClicked, 
        stephenClicked, setStephenClicked,
        trainingProgramClicked, setTrainingProgramClicked,
        horsesReviewsClicked, setHorsesReviewsClicked 
    }) => {

    function resetBtns() {
        setLandingPageClicked(false);
        setStephenClicked(false);
        setTrainingProgramClicked(false);
        setHorsesReviewsClicked(false);
    }

    return (
        <div id="navBtnsParentDiv">
            <NavBtn 
                title={'Home'}
                isClicked={landingPageClicked} 
                onClick={() => { 
                    resetBtns();
                    setLandingPageClicked(true);
                }} 
            />
            <NavBtn 
                title={'Meet Stephen'}
                isClicked={stephenClicked} 
                onClick={() => { 
                    resetBtns();
                    setStephenClicked(true);
                }} 
            />
            <NavBtn 
                title={'Training Program'}
                isClicked={trainingProgramClicked} 
                onClick={() => { 
                    resetBtns();
                    setTrainingProgramClicked(true);
                }} 
            />
            <NavBtn 
                title={'Horses and Reviews'}
                isClicked={horsesReviewsClicked} 
                onClick={() => { 
                    resetBtns();
                    setHorsesReviewsClicked(true);
                }} 
            />
        </div>
    );
};
export{NavBtns};