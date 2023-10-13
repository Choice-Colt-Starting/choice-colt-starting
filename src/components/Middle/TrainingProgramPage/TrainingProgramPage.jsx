import"./trainingProgramPage.css";

const TrainingProgramPage = (props) => {

    // TODO: Make video links unique
    const trainingPrograms = [
        { day: "Day 1-3", exercise: "Round Penning", video: "https://www.youtube.com" },
        { day: "Day 4-5", exercise: "Yield Hind Quarters and Backing Up", video: "https://www.youtube.com" },
        { day: "Day 6-8", exercise: "Lunging and Pick Up Feet", video: "https://www.youtube.com" },
        { day: "Day 9-11", exercise: "Jeffery's Method and Snaffle Bit Flexion", video: "https://www.youtube.com" },
        { day: "Day 12-14", exercise: "Lunging With Saddle", video: "https://www.youtube.com" },
        { day: "Day 15", exercise: "First Ride and Tie Up", video: "https://www.youtube.com" },
        { day: "Day 16-20", exercise: "One Rein Stops and Cruising Lesson", video: "https://www.youtube.com" },
        { day: "Day 21-24", exercise: "Follow The Fence and Diagonals", video: "https://www.youtube.com" },
        { day: "Day 25-90", exercise: "Trail Rides", video: "https://www.youtube.com" }
    ]

    return(
        <div id={props.trainingProgramClicked===false?"none":"trainingParentDiv"}>
            <div id="programContainer">
                <div id="daysParentDiv">
                    {trainingPrograms.map(({ day }) => {
                        return (
                            <div className="dayDivs">
                                <h4 className="dayText">{day}</h4>
                            </div>
                        );
                    })}
                </div>
                <div id="exercisesParentDiv">
                    {trainingPrograms.map(({ exercise }) => {
                        return (
                            <div className="exercisesDivs">
                                <h4 className="exercisesText">{exercise}</h4>
                            </div>
                        );
                    })}
                </div>
                <div id="videoParentDiv">
                    {trainingPrograms.map(({ video }) => {
                        return (
                            <div className="videosDivs">
                                <a className="videosText" href={video}>Click Here For Example:</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { TrainingProgramPage };