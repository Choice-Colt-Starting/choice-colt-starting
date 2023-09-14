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
                    <div className="dayDivs">
                        <h4 className="dayText">Day 8</h4>
                    </div>
                </div>
                <div id="exercisesParentDiv">
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Round Penning</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">
                            Yield Hind Quarters And Backing Up</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Lunging</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">
                            Jeffery's Method</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Flexing With Snaffle Bit</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Lunging With Saddle</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">First Ride</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">One Reign Stops</h4>
                    </div>
                    {/* <div className="exercisesDivs">
                        <h4 className="exercisesText">Cruising Lesson</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Follow The Fence</h4>
                    </div> */}
                </div>
                <div id="videoParentDiv">
                <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export{TrainingProgramPage};