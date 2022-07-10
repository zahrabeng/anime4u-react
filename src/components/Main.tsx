//import axios from "axios";
import allData from "./Interfaces";
import { useEffect } from "react";

interface Iprops {
  setter: React.Dispatch<React.SetStateAction<allData[]>>;
  data: allData[];
}

export default function Main(props: Iprops): JSX.Element {
  //   const [pageRefresh, setPageRefresh] = useState<boolean>(false);

  const jikanAPI = "https://api.jikan.moe/v4/anime?q="; //?q= added to the end of the API to query

  useEffect(() => {
    async function getAllData() {
      const result = await fetch(
        `${jikanAPI}&order_by=popularity&sort=desc&page=1&rating=g`
      );
      const jsonBody = await result.json();
      props.setter(jsonBody.data);
    }
    getAllData();
  }, []);

  return <></>;
}
