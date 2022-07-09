import { useState } from "react";
import Main from "./components/Main";
import allData from "./components/Interfaces";



function App(): JSX.Element {
  const [pageData, setPageData] = useState<allData[]>([]);

  return (<Main setter={setPageData} data = {pageData}/>);
}

export default App;
