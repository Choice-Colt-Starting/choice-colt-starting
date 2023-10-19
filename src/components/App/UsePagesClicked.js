import { useReducer } from 'react';

const reducer = (state, action) => {
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
};

const initialState = {
    landingPageClicked: true,
    stephenClicked: false,
    trainingProgramClicked: false,
    horsesReviewsClicked: false
}

function usePagesClicked() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        pages: state,
        setLandingPage: () => dispatch({ type: "setLandingPageClicked" }),
        setStephenPage: () => dispatch({ type: "setStephenClicked" }),
        setTrainingProgramPage: () => dispatch({ type: "setTrainingProgramClicked" }),
        setHorsesReviewsPage: () => dispatch({ type: "setHorsesReviewsClicked" })
    }
}

export { usePagesClicked };