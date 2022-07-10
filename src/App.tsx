import { useState } from "react";

import Main from "./components/Main";
import allData from "./components/Interfaces";
import Grid from "./components/Grid";

function App(): JSX.Element {
  const [pageData, setPageData] = useState<allData[]>([]);
  const [pageNumber, setPageNumber] = useState()

  return (
    <>
      <Main setAllData={setPageData} data={pageData} />
      <Grid data={pageData} />
    </>
  );
}

export default App;
