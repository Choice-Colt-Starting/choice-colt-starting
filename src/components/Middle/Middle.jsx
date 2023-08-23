import"./middle.css";
import steedPic from "../../Steed_and_horse.png";

const Middle=()=>{
    return(
        <div id="middleDiv">
            <img id="steedPic"src={steedPic} alt="logo" />

            <p>
            Hi! I'm Stephen and I love horses!
            </p>
            <a
                className="App-link"
                href="https://www.linkedin.com/in/stephen-burggraaf-867993226/"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn About Me
            </a>
        </div>
    );
    };
export{Middle};