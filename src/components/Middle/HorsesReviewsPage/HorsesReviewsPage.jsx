import"./horsesReviewsPage.css";
import starsPic from "./images/starsPic.png";
import kyleePic from "./images/kylee.jpg";
import sandeePic from "./images/jake.jpeg";
import nikkiPic from "./images/story.jpeg";
import nikki2Pic from "./images/roo.jpeg";
import orluffPic from "./images/orluff.jpeg";
import { HorseReview } from "./HorseReview/HorseReview";
import{HorsesWorldMap}from"./HorsesWorldMap/HorsesWorldMap.jsx";

function HorsesReviewsPage({ horsesReviewsClicked }){

    const horseReviews = [
        {
            name: 'Kylee Olson',
            image: kyleePic,
            review: 'I took my two year old filly to Stephen in the spring 2023. She definitely had a wild side and I was very nervous she wouldn’t turn out. She had 90 days training with him. Since having her back She is legitimately my favorite horse to ride. She doesn’t even act like what you would expect from a 2 1/2 year old. She is so chill and laid back about everything. I think my most favorite thing about her is she is not buddy sour at all. And she was very much before I took her to Stephen. I think the confidence he builds in them doing all the solo trail/city riding that young that makes a huge difference. She continues to impress me every time I ride her.  I would recommend him to anyone.'
        },
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

    return(
        <div id={ horsesReviewsClicked ? "horsesParentDiv" : "none" }>
            {/* <HorsesWorldMap /> */}
            <a id="googleMapsLink" href="https://www.google.com/maps/place/Choice+Colt+Starting/@41.294761,-111.9500269,17z/data=!3m1!4b1!4m6!3m5!1s0x87530daca4ff022d:0x7d664e4d9bc6882f!8m2!3d41.294761!4d-111.947452!16s%2Fg%2F11v0yvq7rb?entry=ttu">Give a Review</a>
            <img id="stars" src={starsPic} alt="stars" />
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