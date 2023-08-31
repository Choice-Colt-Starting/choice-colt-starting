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
                <a className="footerText" href="https://shop.downunderhorsemanship.com/product/fundamentals-series-digital-download/?_gl=1*1gcykha*_ga*MTY3Mjk2NzY1My4xNjkzNTA1MDM4*_gid*OTk2OTYwNTEzLjE2OTM1MDUwMzg.*_fplc*Mlc3QWNpZzBEdWNsckFrZnNqUkElMkJQd0dwciUyRiUyQkk1QkJLMUxOVzNQMSUyRnpTZ1hEWjVTYUdyMlF2dWptRzNnMXVId0M0N3clMkZxYlRNWW9zY3M3b2JBTk1NVjVlTXJPem9UQWQlMkZKSTcwJTJCYjdRTHBHaDhqR2oyRzA5YWJiQkNPWXclM0QlM0Q.*_ga_HB7D6C2R0X*MTY5MzUwNTAzOC4xLjEuMTY5MzUwNTI3MC4wLjAuMA..">Downunder Horsemanship Fundamentals</a>
                <a className="footerText" href="https://downunderhorsemanship.com/instructional-videos/">Downunder Horsemanship Instructional Videos</a>
                <a className="footerText" href="https://downunderhorsemanship.com/guides/">Downunder Horsemanship Training Guides</a>
            </div>
            <div id="column3">
                <h3 className="footerText">Contact Us</h3>
                <h5 className="footerText">Phone Number: (801) 735-4675</h5>
                <h5 className="footerText">Ranch Address:</h5>
                <h5 className="footerText">153 East 2550 North, North Ogden, Utah, 84414</h5>
            </div>
        </div>
    );
};

export{Footer}