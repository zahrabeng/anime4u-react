interface Iprops {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean;
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

  function handlePreviousPageClick() {
    props.setPageNumber((prev) => prev - 1);
  }

  return (
    <>
      <p>Page {props.pageNumber}</p>

      {props.pageNumber !== 1 && (
        <button onClick={() => handlePreviousPageClick()}>Previous Page</button>
      )}
      {props.hasNextPage && (
        <button onClick={() => handleNextPageClick()}>Next Page</button>
      )}
    </>
  );
}
