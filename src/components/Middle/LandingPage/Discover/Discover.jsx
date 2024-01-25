import"./discover.css";

function Discover({setArticlesPage}) {
    
    return(
        <div id="parentDiscoverDiv">
            <h3 id="disDiv0" className="discoverDivs disText" onClick={()=>{setArticlesPage();window.scrollTo({top:0,left:0,behavior:"instant"})}}>Horse Psychology</h3>
            <h3 id="disDiv1" className="discoverDivs disText" onClick={()=>{setArticlesPage();window.scrollTo({top:0,left:0,behavior:"instant"})}}>Horses learn from the release of pressure</h3>
            <h3 id="disDiv2" className="discoverDivs disText" onClick={()=>{setArticlesPage();window.scrollTo({top:0,left:0,behavior:"instant"})}}>Understanding Problem Horses</h3>
            <h3 id="disDiv5" className="discoverDivs disText" onClick={()=>{setArticlesPage();window.scrollTo({top:0,left:0,behavior:"instant"})}}>When is your horse ready to learn something new</h3>
            <h3 id="disDiv3" className="discoverDivs disText" onClick={()=>{setArticlesPage();window.scrollTo({top:0,left:0,behavior:"instant"})}}>Why use groundwork</h3>
            <h3 id="disDiv4" className="discoverDivs disText" onClick={()=>{setArticlesPage();window.scrollTo({top:0,left:0,behavior:"instant"})}}>Horses with short attention spans</h3>
        </div>
    );
}
export{Discover};