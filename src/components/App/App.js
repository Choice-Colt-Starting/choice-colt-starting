import { Header } from "../Header/Header.jsx";
import { Middle } from"../Middle/Middle.jsx";
import { Footer } from "../Footer/Footer.jsx";
import react from "react";
import SelectedPageClickedReducer from "./SelectedPageClickedReducer.js";

function App() {
  const [state, dispatch] = react.useReducer(SelectedPageClickedReducer, {
    landingPageClicked: true,
    stephenClicked: false,
    trainingProgramClicked: false,
    horsesReviewsClicked: false
  })

  return (
    <>
        <Header state={state} dispatch={dispatch} />
        <Middle state={state} />
        <Footer />
    </>
  );
}

export default App;
