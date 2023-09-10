import{Header}from"../Header/Header.jsx";
import{Middle}from"../Middle/Middle.jsx";
import{Footer}from"../Footer/Footer.jsx";
import react from"react";

function App() {
  const [stephenClicked,setStephenClicked]=react.useState(false);
  const [landingPageClicked,setLandingPageClicked]=react.useState(true);
  return (
    <div>
        <Header setStephenClicked={setStephenClicked} setLandingPageClicked={setLandingPageClicked} />
        <Middle stephenClicked={stephenClicked}landingPageClicked={landingPageClicked} />
        <Footer />
    </div>
  );
}

export default App;
