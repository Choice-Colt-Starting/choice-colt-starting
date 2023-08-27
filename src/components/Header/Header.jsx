import"./header.css";
import headerLogo from"./headerLogo.png";
import{NavBtns}from"./NavBtns/NavBtns.jsx";

function Header(){
    return(
        <div id="headerParentDiv">
            <div id="topHeaderDiv">
                <div id="leftHeaderDiv">
                    <h1 id="headerMyName">Stephen Burggraaf</h1>
                </div>
                <div id="rightHeaderDiv">
                    <img id="headerLogo" src={headerLogo} alt="Choice Colt Starting"/ >
                </div>
            </div>
            <div id="bottomHeaderDiv">
                <NavBtns />
            </div>
        </div>
    );
};
export{Header};