import"./trainingProgramPage.css";
import trailRides from"./images/trailRiding.png";

// Hey Tanner! The code that is commented out is stuff you helped create. I was not sure how to apply it to the stuff I had changed, so I just commented it out and we can put it back together when we code together next.


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
                        <iframe className="videoPics" src="https://www.youtube.com/embed/JaSi5eCBh_w?si=u9sutTsOqmwmHP76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 4-5</h4>
                        <h4 className="leftRowText">Yield Hind Quarters and Backing Up</h4>
                    </div>
                    <div className="rightRowDivs">
                        <iframe className="videoPics" src="https://www.youtube.com/embed/IVgfRRu1PTw?si=rd66GAjO5QBmL4J5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 6-8</h4>
                        <h4 className="leftRowText">Lunging and Pick Up Feet</h4>
                    </div>
                    <div className="rightRowDivs">
                        <iframe className="videoPics" src="https://www.youtube.com/embed/O2tD2ZTPQjI?si=hxAEhuQDp-0t9c3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 9-11</h4>
                        <h4 className="leftRowText">Jeffery's Method and Snaffle Bit Flexion</h4>
                    </div>
                    <div className="rightRowDivs">
                        <iframe className="videoPics" src="https://www.youtube.com/embed/IRUjF68Os2w?si=Zix0dUBM1Dn8SmNL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 12-14</h4>
                        <h4 className="leftRowText">Lunging With Saddle</h4>
                    </div>
                    <div className="rightRowDivs">
                        <iframe className="videoPics" src="https://www.youtube.com/embed/8G7s92tWmic?si=LYYYYoDWoLPgF8ib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 15</h4>
                        <h4 className="leftRowText">First Ride and Tie Up</h4>
                    </div>
                    <div className="rightRowDivs">
                        <iframe className="videoPics" src="https://www.youtube.com/embed/Kuv3rjm_yjk?si=_g7jY1DOTPR0NTda" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 16-20</h4>
                        <h4 className="leftRowText">One Rein Stops and Cruising Lesson</h4>
                    </div>
                    <div className="rightRowDivs">
                        <iframe className="videoPics" src="https://www.youtube.com/embed/Jd9EFxnTSbA?si=pb3IhZpGNaAJxB5b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="programRows">
                    <div className="leftRowDivs">
                        <h4 className="leftRowText">Day 21-24</h4>
                        <h4 className="leftRowText">Follow The Fence and Diagonals</h4>
                    </div>
                    <div className="rightRowDivs">
                        <iframe className="videoPics" src="https://www.youtube.com/embed/01i6keZZ2VA?si=9Uv59l3vmdgxEHv7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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