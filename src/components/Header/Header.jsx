import"./header.css";
import headerLogo from"./headerLogo.png";
import{NavBtns}from"./NavBtns/NavBtns.jsx";

function Header({ state, dispatch }){
    return(
        <div id="headerParentDiv">
            <div id="topHeaderDiv">
                <div id="leftHeaderDiv">
                    <h1 id="headerMyName">Stephen Burggraaf</h1>
                </div>
                <div id="rightHeaderDiv">
                    <img 
                        id="headerLogo"
                        onClick={() => dispatch({ type: 'setLandingPageClicked' })} 
                        src={headerLogo} alt="Choice Colt Starting"
                    />
                </div>
            </div>
            <div id="bottomHeaderDiv">
                <NavBtns state={state} dispatch={dispatch} />
            </div>
        </div>
    );
};
export{Header};