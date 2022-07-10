interface Iprops {
  hasNextPage: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
}

export default function PageButtons(props: Iprops): JSX.Element {
  function handleNextPageClick() {
    if (props.hasNextPage) {
      props.setPageNumber((prev) => prev + 1);
    } else {
      props.setPageNumber(1);
    }
  }

  return (
    <>
      <p>Page {props.pageNumber}</p>
      {props.hasNextPage && (
        <button onClick={() => handleNextPageClick()}>Next Page</button>
      )}
    </>
  );
}
