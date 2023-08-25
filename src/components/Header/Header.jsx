import"./header.css";
import headerLogo from"./headerLogo.jpeg";

function Header(){
    return(
        <div id="headerDiv">
            <div>
                <img id="headerLogo" src={headerLogo} alt="Choice Colt Starting" />
            </div>
            <h1 id="headerText">Choice Colt Starting</h1>
            <div>
            </div>
        </div>
    );
};
export{Header};