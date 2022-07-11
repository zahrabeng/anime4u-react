//import axios from "axios";
import allData from "./Interfaces";
import { useEffect } from "react";

interface Iprops {
  setAllData: React.Dispatch<React.SetStateAction<allData[] | []>>;
  setNextPage: React.Dispatch<React.SetStateAction<boolean>>;
  data: allData[];
  pageNumber: number;
  searchText:string;
}

export default function Main(props: Iprops): JSX.Element {
  const jikanAPI = "https://api.jikan.moe/v4/anime?q="; //?q= added to the end of the API to query

  function filterBySearch(allData: allData[]): allData[] | []{
    const filteredData = allData.filter((obj) => obj.title.includes(props.searchText))
    return filteredData
  }



  useEffect(() => {
    async function getAllData() {
      const result = await fetch(
        `${jikanAPI}&order_by=popularity&sort=desc&page=${props.pageNumber}&rating=g`
      );
      const jsonBody = await result.json();
      props.setAllData(filterBySearch(jsonBody.data)); 
      props.setNextPage(jsonBody.pagination.has_next_page);
    }
    window.scrollTo(0, 0); 
    getAllData();
  }, [props.pageNumber, props.searchText]);

  return <></>;
}
