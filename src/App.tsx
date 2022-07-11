import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import allData from "./components/Interfaces";
import Main from "./components/Main";
import Grid from "./components/Grid";
import PageButtons from "./components/PageButtons";
import SingleCard from "./components/SingleCard";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

function App(): JSX.Element {
  const [pageData, setPageData] = useState<allData[] | []>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [cardId, setCardId] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  console.log(cardId);
  console.log(searchText);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Searchbar setSearchText={setSearchText} />
                <Main
                  data={pageData}
                  setAllData={setPageData}
                  setNextPage={setHasNextPage}
                  pageNumber={pageNumber}
                  searchText = {searchText}
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
            element={<SingleCard cardId={cardId} allData={pageData} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
