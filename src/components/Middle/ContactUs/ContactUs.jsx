import"./contactUs.css";

const ContactUs=props=>{
    return(
        <div id={props.contactUsClicked===false?"none":"parentDiv"}>
            <p>The Contact Us page is currently being developed</p>
        </div>
    );
};

export{ContactUs};