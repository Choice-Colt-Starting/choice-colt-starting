import"./discover.css";

function Discover({setArticlesPage}) {
    
    return(
        <div id="parentDiscoverDiv">
            <h3 id="disDiv0" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Horse Psychology</h3>
            <h3 id="disDiv1" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Horses learn from the release of pressure</h3>
            <h3 id="disDiv2" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Understanding Problem Horses</h3>
            <h3 id="disDiv5" className="discoverDivs disText" onClick={()=>setArticlesPage()}>When is your horse ready to learn something new</h3>
            <h3 id="disDiv3" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Why use groundwork</h3>
            <h3 id="disDiv4" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Horses with short attention spans</h3>
        </div>
    );
}
export{Discover};