import { useState } from "react";

import Main from "./components/Main";
import allData from "./components/Interfaces";
import Grid from "./components/Grid";

function App(): JSX.Element {
  const [pageData, setPageData] = useState<allData[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>();

  return (
    <>
      <Main
        data={pageData}
        setAllData={setPageData}
        setNextPage={setHasNextPage}
      />
      <Grid data={pageData} />
    </>
  );
}

export default App;
