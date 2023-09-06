import"./middle.css";
import steedPic from "../../Steed_and_horse.png";
import{Discover}from"./Discover/Discover.jsx";

const Middle=()=>{
    return(
        <div id="middleDiv">
            <img id="steedPic"src={steedPic} alt="logo" />
            <p>Slideshow here</p>
            <div id="seperateDiv" />
            <div>
                <Discover />
            </div>
        </div>
    );
    };
export{Middle};