import"./trainingProgramPage.css";

const TrainingProgramPage=(props)=>{
    return(
        <div id={props.trainingProgramClicked===false?"none":"trainingParentDiv"}>
            <div id="programContainer">
                <div id="daysParentDiv">
                    <div className="dayDivs">
                        <h4 className="dayText">Day 1-3</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 4-5</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 6-8</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 9-11</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 12-14</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 15</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 16-20</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 21-24</h4>
                    </div>
                    <div className="dayDivs">
                        <h4 className="dayText">Day 25-90</h4>
                    </div>
                </div>
                <div id="exercisesParentDiv">
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Round Penning</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">
                            Yield Hind Quarters and Backing Up</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Lunging and Pick Up Feet</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">
                            Jeffery's Method and Snaffle Bit Flexion</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Lunging With Saddle</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">First Ride and Tie Up</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">One Rein Stops and Cruising Lesson</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Follow The Fence and Diagonals</h4>
                    </div>
                    <div className="exercisesDivs">
                        <h4 className="exercisesText">Trail Rides</h4>
                    </div>
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
                    <div className="videosDivs">
                        <a className="videosText" href="https://www.youtube.com">Click Here For Example:</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export{TrainingProgramPage};