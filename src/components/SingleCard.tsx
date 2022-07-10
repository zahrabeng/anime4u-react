import { useNavigate } from "react-router-dom";

interface Iprops {
  cardId: number;
}

export default function SingleCard(props: Iprops): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>Hello world {props.cardId}</p>
    </>
  );
}
