import allData from "./Interfaces";

interface Iprops {
  data: allData[];
}

export default function Grid(props: Iprops): JSX.Element {
  return (
    <>
      {props.data.map((data: allData) => (
        <img src={data.images.jpg.image_url} key={data.mal_id}></img>
      ))}
    </>
  );
}
