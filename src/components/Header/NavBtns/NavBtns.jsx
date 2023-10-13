import { NavBtn } from "./NavBtn/NavBtn";
import "./navBtns.css";

const NavBtns = ({ state, dispatch }) => {

    return (
        <div id="navBtnsParentDiv">
            <NavBtn 
                title={'Home'}
                isClicked={state.landingPageClicked} 
                onClick={() => dispatch({ type: 'setLandingPageClicked' })} 
            />
            <NavBtn 
                title={'Meet Stephen'}
                isClicked={state.stephenClicked} 
                onClick={() => dispatch({ type: 'setStephenClicked' })} 
            />
            <NavBtn 
                title={'Training Program'}
                isClicked={state.trainingProgramClicked} 
                onClick={() => dispatch({ type: 'setTrainingProgramClicked' })} 
            />
            <NavBtn 
                title={'Horses and Reviews'}
                isClicked={state.horsesReviewsClicked} 
                onClick={() => dispatch({ type: 'setHorsesReviewsClicked' })} 
            />
        </div>
    );
};

export{NavBtns};