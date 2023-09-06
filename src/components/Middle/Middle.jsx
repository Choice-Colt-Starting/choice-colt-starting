import"./middle.css";
import steedPic from "../../Steed_and_horse.png";
import{Discover}from"./Discover/Discover.jsx";

const Middle=()=>{
    return(
        <div id="middleDiv">
            <img id="steedPic"src={steedPic} alt="logo" />
            <p>What is Choice Colt Starting? This page will describe the company name.</p>
            <div>
                <Discover />
            </div>
        </div>
    );
    };
export{Middle};