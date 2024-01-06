import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'setLandingPageClicked':
            return {
                ...state,
                landingPageClicked: true,
                stephenClicked: false,
                trainingClicked: false,
                daysClicked: false,
                horsesReviewsClicked: false
            };
        case 'setStephenClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: true,
                trainingClicked: false,
                daysClicked: false,
                horsesReviewsClicked: false
            };
        case 'setTrainingClicked':
            return {
                ...state,
                trainingClicked: true
            };  
        case 'setDaysClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
                trainingClicked: false,
                daysClicked: true,
                horsesReviewsClicked: false
            };
        case 'setHorsesReviewsClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
                trainingClicked: false,
                daysClicked: false,
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
    trainingClicked: false,
    daysClicked: false,
    horsesReviewsClicked: false
}

function usePagesClicked() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        pages: state,
        setLandingPage: () => dispatch({ type: "setLandingPageClicked" }),
        setStephenPage: () => dispatch({ type: "setStephenClicked" }),
        setTrainingClicked: ()=> dispatch({ type: "setTrainingClicked" }),
        setDaysPage: () => dispatch({ type: "setDaysClicked" }),
        setHorsesReviewsPage: () => dispatch({ type: "setHorsesReviewsClicked" })
    }
}

export { usePagesClicked };