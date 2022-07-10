import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import allData from "./components/Interfaces";
import Main from "./components/Main";
import Grid from "./components/Grid";
import PageButtons from "./components/PageButtons";
import SingleCard from "./components/SingleCard";

function App(): JSX.Element {
  const [pageData, setPageData] = useState<allData[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [cardId, setCardId] = useState<number>(0);

  console.log(cardId);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  data={pageData}
                  setAllData={setPageData}
                  setNextPage={setHasNextPage}
                  pageNumber={pageNumber}
                />
                <Grid data={pageData} setCardId={setCardId} />
                <PageButtons
                  hasNextPage={hasNextPage}
                  setPageNumber={setPageNumber}
                  pageNumber={pageNumber}
                />
              </>
            }
          />

          <Route
            path={`/card/${cardId}`}
            element={<SingleCard cardId={cardId} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
