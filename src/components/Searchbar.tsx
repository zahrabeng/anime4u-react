import { useState } from "react";

interface Iprops {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  setSearchButtonToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Searchbar(props: Iprops): JSX.Element {
  // const [searchText, setSearchText] = useState<string>("");

  return (
    <>
      <input
        onChange={(e) => props.setSearchText(e.target.value)}
        placeholder="Search an Anime..."
        value={props.searchText}
      ></input>
      <button onClick={() => props.setSearchButtonToggle((prev) => !prev)}>
        Search
      </button>
    </>
  );
}
