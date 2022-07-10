import { useState } from "react";

import allData from "./components/Interfaces";
import Main from "./components/Main";
import Grid from "./components/Grid";
import PageButtons from "./components/PageButtons";

function App(): JSX.Element {
  const [pageData, setPageData] = useState<allData[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);


  return (
    <>
      <Main
        data={pageData}
        setAllData={setPageData}
        setNextPage={setHasNextPage}
      />
      <Grid data={pageData} />
      <PageButtons hasNextPage ={hasNextPage}/>
    </>
  );
}

export default App;
