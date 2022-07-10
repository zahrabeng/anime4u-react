import allData from "./Interfaces";

interface Iprops {
  data: allData[];
}

export default function Grid(props: Iprops): JSX.Element {
  return (
    <>
      {props.data.map((data: allData) => (
        <div key={data.mal_id}>
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
