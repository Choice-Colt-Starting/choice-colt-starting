function SelectedPageClickedReducer(state, action) {
    switch (action.type) {
        case 'setLandingPageClicked':
            return {
                ...state,
                landingPageClicked: true,
                stephenClicked: false,
                trainingProgramClicked: false,
                horsesReviewsClicked: false
            };
        case 'setStephenClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: true,
                trainingProgramClicked: false,
                horsesReviewsClicked: false
            };
        case 'setTrainingProgramClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
                trainingProgramClicked: true,
                horsesReviewsClicked: false
            };
        case 'setHorsesReviewsClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
                trainingProgramClicked: false,
                horsesReviewsClicked: true
            };
        default:
            return {
                ...state
            }
    }
}

export default SelectedPageClickedReducer;