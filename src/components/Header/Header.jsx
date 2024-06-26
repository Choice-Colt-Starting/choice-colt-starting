import "./header.css";
import headerLogo from "./headerLogo.png";
import { NavBtns } from "./NavBtns/NavBtns.jsx";

function Header({
    pages,
    setLandingPage,
    setStephenPage,
    setTrainingClicked,
    setDaysPage,
    setArticlesPage,
    setHorsesPage,
    setHorsesReviewsPage }) {

    return(
        <div id="headerParentDiv">
            <div id="topHeaderDiv">
                <div id="leftHeaderDiv">
                    <h1 id="headerMyName">Stephen Burggraaf</h1>
                </div>
                <div id="rightHeaderDiv">
                    <img 
                        id="headerLogo"
                        onClick={()=>{setLandingPage();window.scrollTo({top:0,left:0,behavior:"instant"})}}
                        src={headerLogo} alt="Choice Colt Starting"
                    />
                </div>
            </div>
            <div id="bottomHeaderDiv">
                <NavBtns
                    pages={pages}
                    setLandingPage={setLandingPage}
                    setStephenPage={setStephenPage}
                    setTrainingClicked={setTrainingClicked}
                    setDaysPage={setDaysPage}
                    setArticlesPage={setArticlesPage}
                    setHorsesPage={setHorsesPage}
                    setHorsesReviewsPage={setHorsesReviewsPage} />
            </div>
        </div>
    );
};

export { Header };