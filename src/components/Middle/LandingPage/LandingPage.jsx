import "./landingPage.css";
import steedPic from "./images/Steed_and_horse.png";
import { Discover } from "./Discover/Discover.jsx";

const LandingPage = ({ 
    landingPageClicked, 
    setArticlesPage,
    setHorsesPage }) => {
    return(
        <div id={ landingPageClicked ? "middleDiv" : "none"}>
            <img id="steedPic"src={steedPic} alt="logo" />
            <div id="seperateDiv" />
            <div>
                <Discover setArticlesPage={setArticlesPage} />
            </div>
        </div>
    );
};
export{LandingPage};