//import axios from "axios";
import allData from "./Interfaces";
import { useEffect, useState } from "react";

export default function Main(): JSX.Element {
  const [pageData, setPageData] = useState<allData[]>([]);
  const [pageRefresh, setPageRefresh] = useState<boolean>(false);

  const jikanAPI = "https://api.jikan.moe/v4/anime?q="; //?q= added to the end of the API to query

  useEffect(() => {
    async function getAllData() {
      const result = await fetch(
        `${jikanAPI}&order_by=popularity&sort=desc&page=1&rating=g`
      );
      const jsonBody = await result.json();
      setPageData(jsonBody.data);
    }
    getAllData();
  }, []);

//   console.log(pageData);

  return (
    <>
      {pageData.map((data:allData) => <img src={data.images.jpg.image_url} key={data.mal_id}></img>)}
    </>
  );
}
