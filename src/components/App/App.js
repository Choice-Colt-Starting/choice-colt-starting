import { Header } from "../Header/Header.jsx";
import { Middle } from"../Middle/Middle.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { usePagesClicked } from "./UsePagesClicked.js";

function App() {

  const {
    pages,
    setLandingPage,
    setStephenPage,
    setTrainingProgramPage,
    setHorsesReviewsPage
  } = usePagesClicked();

  return (
    <>
        <Header
          pages={pages}
          setLandingPage={setLandingPage}
          setStephenPage={setStephenPage}
          setTrainingProgramPage={setTrainingProgramPage}
          setHorsesReviewsPage={setHorsesReviewsPage} />
        <Middle pages={pages} />
        <Footer />
    </>
  );
}

export default App;
