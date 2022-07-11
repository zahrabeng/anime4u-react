import { useNavigate } from "react-router-dom";
import allData from "../components/Interfaces"

interface Iprops {
  cardId: number;
  allData: allData[]; 
}

export default function SingleCard(props: Iprops): JSX.Element {
  const navigate = useNavigate();

  const singleData = props.allData.find((eachObj) => eachObj.mal_id === props.cardId)
  
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>Hello world {props.cardId}</p>
    </>
  );
}
