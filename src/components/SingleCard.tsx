import { useNavigate } from "react-router-dom";
import allData from "../components/Interfaces";

interface Iprops {
  cardId: number;
  allData: allData[];
}

export default function SingleCard(props: Iprops): JSX.Element {
  const navigate = useNavigate();

  const singleData = props.allData.find(
    (eachObj) => eachObj.mal_id === props.cardId
  );
  console.log(singleData);
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{singleData?.title}</h1>
      <h2>{singleData?.title_japanese}</h2>
      <img src={singleData?.images.jpg.image_url}></img>
      <p>{singleData?.synopsis}</p>
      <div>
        <p>Type: {singleData?.type}</p>
        <p>Episodes: {singleData?.episodes}</p>
        <p>Genre: {singleData?.genres.map((obj) => ` ✨${obj.name}`)}</p>
      </div>
    </>
  );
}
