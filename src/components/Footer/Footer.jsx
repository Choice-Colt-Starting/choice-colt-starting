import"./footer.css";
import youtubeIcon from"./images/youtubeIcon.jpg";
import instagramIcon from"./images/instagramIcon.jpg";
import facebookIcon from"./images/facebookIcon.jpg";
import tiktokIcon from"./images/tiktokIcon.jpg";

function Footer(){
    return(
        <div id="parentFooterDiv">
            <div id="column1">
                <h3 className="footerText">Discover</h3>
                <img className="socialIcons" src={youtubeIcon} alt="YouTube Channel Link" />
                <img className="socialIcons" src={instagramIcon} alt="instagram page link" />
                <img className="socialIcons" src={facebookIcon} alt="facebook page link" />
                <img className="socialIcons" src={tiktokIcon} alt="tiktok page link" />

            </div>
            <div id="column2">
                <h3 className="footerText">Training Resources</h3>
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