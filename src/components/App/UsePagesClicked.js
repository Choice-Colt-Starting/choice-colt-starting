import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'setLandingPageClicked':
            return {
                ...state,
                landingPageClicked: true,
                stephenClicked: false,
                daysClicked: false,
                horsesReviewsClicked: false
            };
        case 'setStephenClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: true,
                daysClicked: false,
                horsesReviewsClicked: false
            };
        case 'setDaysClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
                daysClicked: true,
                horsesReviewsClicked: false
            };
        case 'setHorsesReviewsClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
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
    daysClicked: false,
    horsesReviewsClicked: false
}

function usePagesClicked() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        pages: state,
        setLandingPage: () => dispatch({ type: "setLandingPageClicked" }),
        setStephenPage: () => dispatch({ type: "setStephenClicked" }),
        setDaysPage: () => dispatch({ type: "setDaysClicked" }),
        setHorsesReviewsPage: () => dispatch({ type: "setHorsesReviewsClicked" })
    }
}

export { usePagesClicked };