import"./navBtns.css";

const NavBtns=props=>{
    return(
        <div id="navBtnsParentDiv">
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(false);props.setStephenClicked(true);props.setTrainingProgramClicked(false);props.setHorsesReviewsClicked(false);props.setContactUsClicked(false);}}>Meet Stephen</h4>
            </div>
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(false);props.setStephenClicked(false);props.setTrainingProgramClicked(true);props.setHorsesReviewsClicked(false);props.setContactUsClicked(false);}}>Training Program</h4>
            </div>
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(false);props.setStephenClicked(false);props.setTrainingProgramClicked(false);props.setHorsesReviewsClicked(true);props.setContactUsClicked(false);}}>Horses and Reviews</h4>
            </div>
            <div>
                <h4 className="NavBtns" onClick={()=>{props.setLandingPageClicked(false);props.setStephenClicked(false);props.setTrainingProgramClicked(false);props.setHorsesReviewsClicked(false);props.setContactUsClicked(true);}}>Contact Us</h4>
            </div>
        </div>
    );
};
export{NavBtns};