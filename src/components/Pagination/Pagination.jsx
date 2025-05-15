import "./pagination.css";

function Pagination(props) {
  // eslint-disable-next-line react/prop-types
  const { totalCars, carsPerPage, setCurrentPage, currentPage } = props;
  const pages = [];
  const pagesCount = totalCars / carsPerPage;
  for (let i = 1; i <= Math.ceil(pagesCount); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="pagination d-flex justify-content-center my-5">
        <button
          className="border px-2 rounded py-1 me-2"
          type="button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous
        </button>
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={`${
              page === currentPage && "active"
            } border px-2 rounded mx-1`}>
            {page}
          </button>
        ))}
        <button
          className="border px-2 rounded py-1 ms-2"
          type="button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(pagesCount)}>
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
