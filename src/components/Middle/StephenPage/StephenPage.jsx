import"./stephenPage.css";
import me2 from "./images/me2.jpeg"
import me3 from "./images/me3.jpeg"
import me4 from "./images/me4.jpeg"

function StephenPage({ stephenClicked }) {
    return(
        <div id={ stephenClicked ? "bioDiv" : "none"}>
            <iframe id="introDiv" src="https://www.youtube.com/embed/8fUNCBQOldI?si=Gy4zSlyVSBUikd8S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div id="div1">
                <img className="mePics" src={me2} alt="stephen" />
                <p className="paragraphs">
                    As a 16 year old looking for my purpose in this world, it took only one day of seeing foals born, colts started, and horses trained by a horseman named Alan Rainsdon to 
                    get me hooked on the dream of being a Colt Starter. Alan hired me as his ranch-hand and introduced me to his lifelong knowledge of training horses, and something felt 
                    different about him from other horsemen and horsewomen I had previously worked with. He was incredibly observant and open-minded with the horses he trained, always giving 
                    back to them as much as he was asking for them to give. He was the embodiment of the saying, "If you say you only have one hour to get something done, it will take all day, 
                    but if you say you have all day, it will get done faster than expected". He introduced me to Clinton Anderson's Fundamentals, Foal Handling, and Colt Starting video kits, 
                    which gave me an unmatchably detailed resource when I wasn't sure how to progress my horsemanship.
                </p>
            </div>
            <div id="div2">
                <div id="div2div">
                    <p className="paragraphs">
                        I spent two years studying Clinton Anderson's method for horse training, and applying it with the 20+ horses Alan Rainsdon bred and sold each year. The roundpen became 
                        my sanctuary. I was a dedicated learner to groundwork and fundamental saddle training, doing my best to get a horse to always show relaxation during the training. 
                        I worked hard to train a horse to stay relaxed and never buck or fight during training. I found the correct timing with horses to start them in the saddle without a 
                        single buck thrown. I found how to stop breaking horses, and instead, give them their Choice for success. The combination of Clinton Anderson's method and my commitment 
                        for my horses to be relaxed, gave me the feel and timing I have with horses today.
                    </p>
                </div>
                <img className="mePics" src={me3} alt="stephen" />
            </div>
            <div id="div3">
                <img className="mePics"src={me4}alt="stephen" />
                <div>
                    <p className="paragraphs">
                        After working with Alan Rainsdon, I began the business of buying colts and problem horses to train. A lot of my time riding these colts was done across the sagebrush 
                        hills of Wyoming. This showed me how to make a competitive balance of arena work (getting a horse to be soft and giving) and trail rides (desensitizing the horse to 
                        everything in the world).
                    </p>
                    <p className="paragraphs">
                        <b>Choice Colt Starting</b> is where I am bringing all my time, feel, and experience to individual clients that want their colts and problem horses started. 
                        I am showing the world, one horse at a time, that horses perform best when they have the freedom of Choice in the learning process, instead of forcing them and breaking 
                        them.
                    </p>
                </div>
            </div>
        </div>
    );
}

export { StephenPage };