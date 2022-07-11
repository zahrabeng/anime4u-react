import { useState } from "react";
import allData from "./Interfaces";

interface Iprops {
  allData: allData[];
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searchbar(props: Iprops): JSX.Element {
  return (
    <>
      <input
        onChange={(e) => props.setSearchText(e.target.value)}
        placeholder="Search an Anime..."
      ></input>
    </>
  );
}
