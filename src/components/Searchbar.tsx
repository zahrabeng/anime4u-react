import { useState } from "react";

interface Iprops {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searchbar(props: Iprops): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");

  
  return (
    <>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search an Anime..."
      ></input>
      <button onClick={()=> props.setSearchText(searchText)}>Search</button>
    </>
  );
}
