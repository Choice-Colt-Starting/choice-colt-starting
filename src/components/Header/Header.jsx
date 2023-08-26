import"./header.css";
import headerLogo from"./headerLogo.png";

function Header(){
    return(
        <div id="headerDiv">
            <div>
                <h1 id="headerMyName">Stephen Burggraaf</h1>
            </div>
                <img id="headerLogo" src={headerLogo} alt="Choice Colt Starting" />
            <div id="rightHeaderDiv">
            </div>
        </div>
    );
};
export{Header};