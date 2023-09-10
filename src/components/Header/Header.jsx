import"./header.css";
import headerLogo from"./headerLogo.png";
import{NavBtns}from"./NavBtns/NavBtns.jsx";

function Header(props){
    return(
        <div id="headerParentDiv">
            <div id="topHeaderDiv">
                <div id="leftHeaderDiv">
                    <h1 id="headerMyName">Stephen Burggraaf</h1>
                </div>
                <div id="rightHeaderDiv">
                    <img id="headerLogo" onClick={()=>{props.setLandingPageClicked(true);props.setStephenClicked(false);}} src={headerLogo} alt="Choice Colt Starting" />
                </div>
            </div>
            <div id="bottomHeaderDiv">
                <NavBtns setStephenClicked={props.setStephenClicked} setLandingPageClicked={props.setLandingPageClicked} />
            </div>
        </div>
    );
};
export{Header};