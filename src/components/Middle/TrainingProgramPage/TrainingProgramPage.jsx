import"./trainingProgramPage.css";
import roundpenningPic from"./images/roundpenningPic.png";
import yeildHind from"./images/yeildHindQuarters.png";
import lunging from"./images/lunging.png";
import jefferysMethod from"./images/jefferysMethod.jpeg";
import introSaddle from"./images/introducingSaddle.jpeg";
import reinStops from"./images/reinStops.png";
import followFence from"./images/followFence.png";
import trailRides from"./images/trailRiding.png";

// const TrainingProgramPage = ({ trainingProgramClicked }) => {

//     // TODO: Make video links unique
//     const trainingPrograms = [
//         { day: "Day 1-3", exercise: "Round Penning", video: "https://www.youtube.com" },
//         { day: "Day 4-5", exercise: "Yield Hind Quarters and Backing Up", video: "https://www.youtube.com" },
//         { day: "Day 6-8", exercise: "Lunging and Pick Up Feet", video: "https://www.youtube.com" },
//         { day: "Day 9-11", exercise: "Jeffery's Method and Snaffle Bit Flexion", video: "https://www.youtube.com" },
//         { day: "Day 12-14", exercise: "Lunging With Saddle", video: "https://www.youtube.com" },
//         { day: "Day 15", exercise: "First Ride and Tie Up", video: "https://www.youtube.com" },
//         { day: "Day 16-20", exercise: "One Rein Stops and Cruising Lesson", video: "https://www.youtube.com" },
//         { day: "Day 21-24", exercise: "Follow The Fence and Diagonals", video: "https://www.youtube.com" },
//         { day: "Day 25-90", exercise: "Trail Rides", video: "https://www.youtube.com" }
//     ]

//     return(
//         <div id={ trainingProgramClicked ? "trainingParentDiv" : "none" }>
//             <div id="programContainer">
//                 <div id="daysParentDiv">
//                     {trainingPrograms.map(({ day }) => {
//                         return (
//                             <div className="dayDivs">
//                                 <h4 className="dayText">{day}</h4>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div id="exercisesParentDiv">
//                     {trainingPrograms.map(({ exercise }) => {
//                         return (
//                             <div className="exercisesDivs">
//                                 <h4 className="exercisesText">{exercise}</h4>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div id="videoParentDiv">
//                     {trainingPrograms.map(({ video }) => {
//                         return (
//                             <div className="videosDivs">
//                                 <a className="videosText" href={video}>Click Here For Example:</a>
//                             </div>
//                         );
//                     })}
const TrainingProgramPage=props=>{
    return(
        <div id={props.trainingProgramClicked===false?"none":"trainingParentDiv"}>
            <div id="whiteContainer">
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 1-3</h4>
                        <h4 className="leftRowText">Round Penning</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/JaSi5eCBh_w?si=PnYo4mfRE8Bntb6H"> 
                            <figure>
                                <img className="videoPics" src={roundpenningPic} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 4-5</h4>
                        <h4 className="leftRowText">Yield Hind Quarters and Backing Up</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/IVgfRRu1PTw?si=yGEv-KogkA-1jT2f"> 
                            <figure>
                                <img className="videoPics" src={yeildHind} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 6-8</h4>
                        <h4 className="leftRowText">Lunging and Pick Up Feet</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/O2tD2ZTPQjI?si=PZQGbeymoByuaFK3"> 
                            <figure>
                                <img className="videoPics" src={lunging} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 9-11</h4>
                        <h4 className="leftRowText">Jeffery's Method and Snaffle Bit Flexion</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/IMpy_6NYrCg?si=10c8Lg22KJjPGggp"> 
                            <figure>
                                <img className="videoPics" src={jefferysMethod} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 12-14</h4>
                        <h4 className="leftRowText">Lunging With Saddle</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/8G7s92tWmic?si=vzQz2Tsh2hwAx9L0"> 
                            <figure>
                                <img className="videoPics" src={introSaddle} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 15</h4>
                        <h4 className="leftRowText">First Ride and Tie Up</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/Kuv3rjm_yjk?si=_wDPIlzEHUHOMHt2"> 
                            <figure>
                                <img className="videoPics" src={reinStops} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 16-20</h4>
                        <h4 className="leftRowText">One Rein Stops and Cruising Lesson</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/Jd9EFxnTSbA?si=er_8ziZcqlmJt-tb"> 
                            <figure>
                                <img className="videoPics" src={reinStops} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 21-24</h4>
                        <h4 className="leftRowText">Follow The Fence and Diagonals</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtu.be/01i6keZZ2VA?si=YqMQ8d-pOYfXr9Wk"> 
                            <figure>
                                <img className="videoPics" src={followFence} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 25-90</h4>
                        <h4 className="leftRowText">Trail Rides</h4>
                    </div>
                    <div className="rightRowDivs">
                        <a href="https://youtube.com/shorts/isHkLr07Gxs?si=BfiKzeePERmH9vlI"> 
                            <figure>
                                <img className="videoPics" src={trailRides} alt="YouTube Channel Link" />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { TrainingProgramPage };