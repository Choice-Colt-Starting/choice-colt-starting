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
                articlesClicked: false,
                horsesClicked: false,
                horsesReviewsClicked: false
            };
        case 'setStephenClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: true,
                trainingClicked: false,
                daysClicked: false,
                articlesClicked: false,
                horsesClicked: false,
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
                articlesClicked: false,
                horsesClicked: false,
                horsesReviewsClicked: false
            };
        case 'setArticlesClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked:false,
                trainingClicked:false,
                daysClicked:false,
                articlesClicked:true,
                horsesClicked: false,
                horsesReviewsClicked:false
            };
        case 'setHorsesClicked':
            return{
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
                trainingClicked: false,
                daysClicked: false,
                articlesClicked: false,
                horsesClicked: true,
                horsesReviewsClicked: false
            };
        case 'setHorsesReviewsClicked':
            return {
                ...state,
                landingPageClicked: false,
                stephenClicked: false,
                trainingClicked: false,
                daysClicked: false,
                articlesClicked: false,
                horsesClicked: false,
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
    articlesClicked: false,
    horsesClicked: false,
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
        setArticlesPage: ()=> dispatch({type: "setArticlesClicked" }),
        setHorsesPage: ()=> dispatch({type: "setHorsesClicked" }),
        setHorsesReviewsPage: () => dispatch({ type: "setHorsesReviewsClicked" })
    }
}

export { usePagesClicked };