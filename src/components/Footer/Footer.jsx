import"./footer.css";
import youtubeIcon from"./images/youtubeIcon.jpg";
import facebookIcon from"./images/facebookIcon.jpg";

function Footer(){
    return(
        <div id="parentFooterDiv">
            <div id="column1">
                <h3 className="footerText">Discover</h3>
                <img className="socialIcons" src={youtubeIcon} alt="YouTube Channel Link" />
                <h5 className="footerText">Instagram</h5>
                <img className="socialIcons" src={facebookIcon} alt="facebook page link" />
                <h5 className="footerText">TikTok</h5>
                <h5 className="footerText">LinkedIn</h5>
            </div>
            <div id="column2">
                <h3 className="footerText">Training Resources</h3>
                <h5 className="footerText">Choice Colt Starting YouTube</h5>
                <h5 className="footerText">Downunder Horsemanship</h5>
            </div>
            <div id="column3">
                <h3 className="footerText">Contact Us</h3>
                <h5 className="footerText">Phone Number: (801) 735-4675</h5>
                <h5 className="footerText">Email: steedsranch@gmail.com</h5>
                <h5 className="footerText">Ranch Address:</h5>
                <h5 className="footerText">153 East 2550 North,</h5>
                <h5 className="footerText">North Ogden, Utah, 84414</h5>
            </div>
        </div>
    );
};

export{Footer}