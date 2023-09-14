import{Header}from"../Header/Header.jsx";
import{Middle}from"../Middle/Middle.jsx";
import{Footer}from"../Footer/Footer.jsx";
import react from"react";

function App() {
  const [landingPageClicked,setLandingPageClicked]=react.useState(true);
  const [stephenClicked,setStephenClicked]=react.useState(false);
  const [trainingProgramClicked,setTrainingProgramClicked]=react.useState(false);
  const [horsesReviewsClicked,setHorsesReviewsClicked]=react.useState(false);

  return (
    <>
        <Header setLandingPageClicked={setLandingPageClicked} setStephenClicked={setStephenClicked} setTrainingProgramClicked={setTrainingProgramClicked} setHorsesReviewsClicked={setHorsesReviewsClicked} />

        <Middle landingPageClicked={landingPageClicked} stephenClicked={stephenClicked} trainingProgramClicked={trainingProgramClicked} horsesReviewsClicked={horsesReviewsClicked} />
        
        <Footer />
    </>
  );
}

export default App;
