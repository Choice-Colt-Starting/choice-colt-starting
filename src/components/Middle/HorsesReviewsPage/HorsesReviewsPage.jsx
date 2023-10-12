import"./horsesReviewsPage.css";
import starsPic from "./images/starsPic.png";
import sandeePic from "./images/jake.png";
import nikkiPic from "./images/story.png";
import nikki2Pic from "./images/roo.jpeg";

function HorsesReviewsPage(props){
    return(
        <div id={props.horsesReviewsClicked===false?"none":"horsesParentDiv"}>
            <a id="mapsLink"href="https://www.google.com/maps/place/Choice+Colt+Starting/@41.294761,-111.9500269,17z/data=!3m1!4b1!4m6!3m5!1s0x87530daca4ff022d:0x7d664e4d9bc6882f!8m2!3d41.294761!4d-111.947452!16s%2Fg%2F11v0yvq7rb?entry=ttu">Give a Review</a>
            <img id="stars"src={starsPic}alt="stars" />
            <div className="reviewDiv">
                <div className="ownerDiv">
                    <h4 className="name">Sandee S:</h4>
                    <img className="horsePic"src={sandeePic}alt="horse" />
                </div>
                <div className="wordsDiv">
                    <p className="words">If anyone is looking for a good colt starter in the Ogden area, Stephen Burggraaf with Choice Colt Starting did a great job getting the first rides on Jake! Gets em out on the roads and on the trails... He's really good with them!</p>
                </div>
            </div>
            <div className="reviewDiv">
                <div className="ownerDiv">
                    <h4 className="name">Nikki P:</h4>
                    <img className="horsePic"src={nikkiPic}alt="horse" />
                </div>
                <div className="wordsDiv">
                    <p className="words">Story's first ride out and even on the street! So excited to get her back!! Stephen is doing amazing with her and is getting exactly the results I was praying he'd get!!</p>
                </div>
            </div>
            <div className="reviewDiv">
                <div className="ownerDiv">
                    <h4 className="name">Nikki K:</h4>
                    <img className="horsePic"src={nikki2Pic}alt="horse" />
                </div>
                <div className="wordsDiv">
                    <p className="words">He's back at another trainer who has started him again and he is doing amazing! If anyone needs a colt started please consider Choice Colt Starting. He has done an amazing job with 2 of my horses now. He puts a solid foundation on them. Worth every penny.</p>
                </div>
            </div>
        </div>
    );
}

export{HorsesReviewsPage};