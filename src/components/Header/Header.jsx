import"./header.css";
import headerLogo from"./headerLogo.png";
import{NavBtns}from"./NavBtns/NavBtns.jsx";

function Header(props){
    return(
        <div id="headerParentDiv">
            <div id="topHeaderDiv">
                <div id="leftHeaderDiv">
                    <h1 id="headerMyName">Stephen Burggraaf</h1>
                </div>
                <div id="rightHeaderDiv">
                    <img id="headerLogo" onClick={()=>{props.setLandingPageClicked(true);props.setStephenClicked(false);props.setTrainingProgramClicked(false);props.setHorsesReviewsClicked(false);}} src={headerLogo} alt="Choice Colt Starting" />
                </div>
            </div>
            <div id="bottomHeaderDiv">
                <NavBtns landingPageClicked={props.landingPageClicked}setLandingPageClicked={props.setLandingPageClicked} stephenClicked={props.stephenClicked}setStephenClicked={props.setStephenClicked} trainingProgramClicked={props.trainingProgramClicked}setTrainingProgramClicked={props.setTrainingProgramClicked} horsesReviewsClicked={props.horsesReviewsClicked}setHorsesReviewsClicked={props.setHorsesReviewsClicked} />
            </div>
        </div>
    );
};
export{Header};