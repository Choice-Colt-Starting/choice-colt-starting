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
        <Header 
          landingPageClicked={landingPageClicked}
          setLandingPageClicked={setLandingPageClicked} 
          stephenClicked={stephenClicked}
          setStephenClicked={setStephenClicked} 
          trainingProgramClicked={trainingProgramClicked}
          setTrainingProgramClicked={setTrainingProgramClicked} 
          horsesReviewsClicked={horsesReviewsClicked}
          setHorsesReviewsClicked={setHorsesReviewsClicked} 
        />
        <Middle 
          landingPageClicked={landingPageClicked} 
          stephenClicked={stephenClicked} 
          trainingProgramClicked={trainingProgramClicked} 
          horsesReviewsClicked={horsesReviewsClicked} 
        />
        <Footer />
    </>
  );
}

export default App;
