import "./landingPage.css";
import steedPic from "./images/Steed_and_horse.png";
import{Discover}from"./Discover/Discover.jsx";



const LandingPage=props=>{
    return(
        <div id={props.landingPageClicked===true?"middleDiv":"none"}>
            <img id="steedPic"src={steedPic} alt="logo" />
            <div id="seperateDiv" />
            <div>
                <Discover />
            </div>
        </div>
    );
};
export{LandingPage};