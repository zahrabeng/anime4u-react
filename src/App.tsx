import { useState } from "react";

import allData from "./components/Interfaces";
import Main from "./components/Main";
import Grid from "./components/Grid";
import PageButtons from "./components/PageButtons";

function App(): JSX.Element {
  const [pageData, setPageData] = useState<allData[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [cardId, setCardId] = useState<number>(0); 

 
  return (
    <>
      <Main
        data={pageData}
        setAllData={setPageData}
        setNextPage={setHasNextPage}
        pageNumber={pageNumber}
      />
      <Grid data={pageData} setCardId = {setCardId}/>
      <PageButtons
        hasNextPage={hasNextPage}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </>
  );
}

export default App;
