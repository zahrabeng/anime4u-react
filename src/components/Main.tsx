//import axios from "axios";
import allData from "./Interfaces";
import { useEffect } from "react";

interface Iprops {
  setAllData: React.Dispatch<React.SetStateAction<allData[]>>;
  setNextPage: React.Dispatch<React.SetStateAction<boolean>>;
  data: allData[];
}

export default function Main(props: Iprops): JSX.Element {
  const jikanAPI = "https://api.jikan.moe/v4/anime?q="; //?q= added to the end of the API to query

  useEffect(() => {
    async function getAllData() {
      const result = await fetch(
        `${jikanAPI}&order_by=popularity&sort=desc&page=1&rating=g`
      );
      const jsonBody = await result.json();
      props.setAllData(jsonBody.data);
      props.setNextPage(jsonBody.pagination.has_next_page);
    }
    getAllData();
  }, []);

  return <></>;
}
