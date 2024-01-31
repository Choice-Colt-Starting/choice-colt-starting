import"./horsesReviewsPage.css";
import starsPic from "./images/starsPic.png";
import kyleePic from "./images/kylee.jpg";
import sandeePic from "./images/jake.jpeg";
import nikkiPic from "./images/story.jpeg";
import nikki2Pic from "./images/roo.jpeg";
import orluffPic from "./images/orluff.jpeg";
import { HorseReview } from "./HorseReview/HorseReview";
import{HorsesWorldMap}from"./HorsesWorldMap/HorsesWorldMap.jsx";
import react from "react";
function HorsesReviewsPage({ horsesReviewsClicked }){

    const[showReview,setShowReview]=react.useState(false);

    const horseReviews = [
        {
            name: 'Sandee S',
            image: sandeePic,
            review: 'If anyone is looking for a good colt starter in the Ogden area, Stephen Burggraaf with Choice Colt Starting did a great job getting the first rides on Jake! Gets em out on the roads and on the trails... He\'s really good with them!'
        },
        {
            name: 'Orluff O',
            image: orluffPic,
            review: 'This kid does an amazing job with horses, that aren\'t broke yet! No one, I know, puts in the time, Stephen Burggraaf does.'
        },
        {
            name: 'Nikki P',
            image: nikkiPic,
            review: 'Story\'s first ride out and even on the street! So excited to get her back!! Stephen is doing amazing with her and is getting exactly the results I was praying he\'d get!!'
        },
        {
            name: 'Nikki K',
            image: nikki2Pic,
            review: 'He\'s back at another trainer who has started him again and he is doing amazing! If anyone needs a colt started please consider Choice Colt Starting. He has done an amazing job with 2 of my horses now. He puts a solid foundation on them. Worth every penny.'
        },
    ]

    function decideParentId(){
        if(horsesReviewsClicked===true&&showReview===false){
            return "reviewsParentDiv";
        }
        if(horsesReviewsClicked===true&&showReview===true){
            return "reviewsParentBigDiv";
        }
        else{
            return "none";
        }
    }

    return(
        <div id={decideParentId()}>
            {/* <HorsesWorldMap /> */}
            <a id="googleMapsLink" href="https://www.youtube.com/@choicecoltstarting">Comment & Review</a>
            <img id="stars" src={starsPic} alt="stars" />

            <div id={showReview===false?"review1div":"review1bigDiv"}>
                <div id={showReview===false?"owner1div":"owner1bigDiv"}>
                    <h4 className="name">Kylee Olson:</h4>
                    <img className="horsePic" src={kyleePic} alt="horse" />
                </div>
                <div id="wordsRev1Div">
                    <p className="words">I took my two year old filly to Stephen in the spring 2023. She definitely had a wild side and I was very nervous she wouldn’t turn out. She had 90 days training with him. Since having her back She is legitimately my favorite horse to ride. She. . .</p>

                    <p id={showReview===false?"expandTxt":"none"} onClick={()=>setShowReview(true)}>Expand</p>         
                    <p id={showReview===false?"none":"collapseTxt"} onClick={()=>setShowReview(false)}>Collapse</p>          
                    <p id={showReview===false?"none":"revParagraph2"}className="words"> doesn’t even act like what you would expect from a 2 1/2 year old. She is so chill and laid back about everything. I think my most favorite thing about her is she is not buddy sour at all. And she was very much before I took her to Stephen. I think the confidence he builds in them doing all the solo trail/city riding that young that makes a huge difference. She continues to impress me every time I ride her.  I would recommend him to anyone.</p>
                </div>
            </div>

            {horseReviews.map(({ name, image, review }) => {
                return (
                    <HorseReview 
                        name={name}
                        image={image}
                        review={review}
                    />
                )
            })}
        </div>
    );
}

export { HorsesReviewsPage };