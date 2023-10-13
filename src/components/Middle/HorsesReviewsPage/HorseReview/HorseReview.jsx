function HorseReview({ name, image, review }) {
    return (
        <div className="reviewDiv">
            <div className="ownerDiv">
                <h4 className="name">{name}:</h4>
                <img className="horsePic" src={image} alt="horse" />
            </div>
            <div className="wordsDiv">
                <p className="words">{review}</p>
            </div>
        </div>
    );
}

export {HorseReview};