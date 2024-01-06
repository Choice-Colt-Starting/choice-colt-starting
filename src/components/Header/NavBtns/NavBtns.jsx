import { NavBtn } from "./NavBtn/NavBtn";
import "./navBtns.css";

function NavBtns({
    pages,
    setLandingPage,
    setStephenPage,
    setTrainingClicked,
    setDaysPage,
    setArticlesPage,
    setHorsesReviewsPage }) {

    return (
        <div id="navBtnsParentDiv">
            <div id="mainNavDiv">
                <NavBtn
                    title={'Home'}
                    isClicked={pages.landingPageClicked}
                    onClick={() => setLandingPage()}
                />
                <NavBtn
                    title={'Meet Stephen'}
                    isClicked={pages.stephenClicked}
                    onClick={() => setStephenPage()}
                />
                <NavBtn
                    title={'Training Program'}
                    isClicked={pages.daysClicked||pages.articlesClicked}
                    onClick={()=>setTrainingClicked()}
                />
                <NavBtn
                    title={'Reviews'}
                    isClicked={pages.horsesReviewsClicked}
                    onClick={() => setHorsesReviewsPage()}
                />
            </div>
            <div id={pages.trainingClicked===false?"none":"menuDiv"}>
                <div className="menuRowDivs">
                    <div className="menuCell"><h4>Home</h4></div>
                    <div className="menuCell"><h4>Meet Stephen</h4></div>
                    <div id="daysCell"className="menuCell" onClick={()=>setDaysPage()}>
                        <h4>90 Days</h4>
                    </div>
                    <div className="menuCell"><h4>Reviews</h4></div>
                </div>
                <div className="menuRowDivs">
                    <div className="menuCell"><h4>Home</h4></div>
                    <div className="menuCell"><h4>Meet Stephen</h4></div>
                    <div id="articlesCell"className="menuCell" onClick={()=>setArticlesPage()}>
                        <h4>Articles</h4>
                    </div>
                    <div className="menuCell"><h4>Reviews</h4></div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export{NavBtns};