import"./trainingProgramPage.css";

const TrainingProgramPage=(props)=>{
    return(
        <div id={props.trainingProgramClicked===false?"none":"parentDiv"}>
            <div id="programContainer">
                <div id="daysParentDiv">
                    <div className="dayDivs">
                        <h4 className="dayText">Day 1-3</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 2</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 3</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 4</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 5</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 6</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 7</h4>
                    </div>
                </div>
                <div id="exercisesParentDiv">
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Roundpenning</h4>
                    </div>
                </div>
                <div id="videoParentDiv">
                </div>
            </div>
        </div>
    );
};

export{TrainingProgramPage};