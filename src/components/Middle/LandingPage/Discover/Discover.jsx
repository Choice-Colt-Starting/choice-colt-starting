import"./discover.css";

function Discover({setArticlesPage}) {
    
    return(
        <div id="parentDiscoverDiv">
            <a id="disDiv0" className="discoverDivs disText" href="https://www.youtube.com/@choicecoltstarting">Check progress of horses on our YouTube Channel</a>
            <h3 id="disDiv1" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Horses learn from the release of pressure</h3>
            <a id="disDiv2" className="discoverDivs disText" href="https://goo.gl/maps/D9ZSuRbdGX6i9Gw69">Visit the ranch</a>
            <h3 id="disDiv5" className="discoverDivs disText" onClick={()=>setArticlesPage()}>When is your horse ready to learn something new</h3>
            <h3 id="disDiv3" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Why use groundwork</h3>
            <h3 id="disDiv4" className="discoverDivs disText" onClick={()=>setArticlesPage()}>Horses with short attention spans</h3>
        </div>
    );
}
export{Discover};