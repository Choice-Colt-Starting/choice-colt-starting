import { Header } from "../Header/Header.jsx";
import { Middle } from"../Middle/Middle.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { usePagesClicked } from "./UsePagesClicked.js";

function App() {

  const {
    pages,
    setLandingPage,
    setStephenPage,
    setTrainingClicked,
    setDaysPage,
    setArticlesPage,
    setHorsesPage,
    setHorsesReviewsPage
  } = usePagesClicked();

  return (
    <>
        <Header
          pages={pages}
          setLandingPage={setLandingPage}
          setStephenPage={setStephenPage}
          setTrainingClicked={setTrainingClicked}
          setDaysPage={setDaysPage}
          setArticlesPage={setArticlesPage}
          setHorsesPage={setHorsesPage}
          setHorsesReviewsPage={setHorsesReviewsPage} 
        />
        <Middle 
          pages={pages} 
          setArticlesPage={setArticlesPage}
          setHorsesPage={setHorsesPage} 
        />
        <Footer />
    </>
  );
}

export default App;
