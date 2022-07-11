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
      <div className="card-titles">
        <h1>{singleData?.title}</h1>
        <h2>{singleData?.title_japanese}</h2>
      </div>
      <a href={singleData?.url} target="_blank" rel="noreferrer">
        <img src={singleData?.images.jpg.image_url}></img>
      </a>
      <p>
        Ranked #{singleData?.rank} Popularity #{singleData?.popularity}
      </p>
      <p>
        Synopsis: {singleData?.synopsis !== null ? singleData?.synopsis : "N/A"}
      </p>
      <div>
        <p>Type: {singleData?.type}</p>
        <p>Episodes: {singleData?.episodes}</p>
        <p>Duration: {singleData?.duration}</p>
        <p>
          Genre:{" "}
          {singleData?.genres.length !== 0
            ? singleData?.genres.map((obj) => ` ✨${obj.name}`)
            : "N/A"}
        </p>
        <p>Rating: {singleData?.rating}</p>
        <p>Status: {singleData?.status}</p>
        <p>Aired: {singleData?.aired.string}</p>
      </div>
    </>
  );
}
