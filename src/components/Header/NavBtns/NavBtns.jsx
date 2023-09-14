import"./navBtns.css";

const NavBtns=props=>{
    return(
        <div id="navBtnsParentDiv">
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(true);props.setStephenClicked(false);props.setTrainingProgramClicked(false);props.setHorsesReviewsClicked(false);}}>Home</h4>
            </div>
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(false);props.setStephenClicked(true);props.setTrainingProgramClicked(false);props.setHorsesReviewsClicked(false);}}>Meet Stephen</h4>
            </div>
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(false);props.setStephenClicked(false);props.setTrainingProgramClicked(true);props.setHorsesReviewsClicked(false);}}>Training Program</h4>
            </div>
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(false);props.setStephenClicked(false);props.setTrainingProgramClicked(false);props.setHorsesReviewsClicked(true);}}>Horses and Reviews</h4>
            </div>
        </div>
    );
};
export{NavBtns};