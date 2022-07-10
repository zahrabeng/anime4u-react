interface Iprops{
    cardId:number;
}

export default function SingleCard(props:Iprops):JSX.Element {
    
  return (
    <>
      <p>Hello world {props.cardId}</p>
    </>
  );
}
