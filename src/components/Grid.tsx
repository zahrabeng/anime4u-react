import { useNavigate } from "react-router-dom";
import allData from "./Interfaces";

interface Iprops {
  data: allData[];
  setCardId: React.Dispatch<React.SetStateAction<number>>;
}

export default function Grid(props: Iprops): JSX.Element {
  const navigate = useNavigate();

  function handleCardClick(id: number) {
    props.setCardId(id);
    navigate(`/card/${id}`);
  }

  return (
    <>
      {props.data.map((data: allData) => (
        <div
          key={data.mal_id}
          className="anime-card"
          onClick={() => handleCardClick(data.mal_id)}
        >
          <img
            src={data.images.jpg.image_url}
            alt="anime cover"
            className="anime-cover"
          ></img>
          <div className="card-data">
            <p>{data.title}</p>
            <p>{data.title_japanese}</p>
            <p>{`Type: ${data.type} | Episodes:${data.episodes}`}</p>
          </div>
        </div>
      ))}
    </>
  );
}
