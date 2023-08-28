const Pagination = ({
  nextPage,
  prevPage,
  goToPage,
  pages,
  currentPage,
}: any) => {
  const pageButtons = []
  function styleButtons(index: number) {
    if (currentPage === index) {
      return (
        <button
          className="h-6 w-6 mx-1.5 mb-4 rounded-lg border text-center bg-blue-500 text-white text-lg"
          key={index}
          onClick={() => goToPage(index)}
        >
          {index}
        </button>
      )
    }
    return (
      <button
        className="h-6 w-6 mx-1.5 mb-4 rounded-lg border text-center bg-white text-lg"
        key={index}
        onClick={() => goToPage(index)}
      >
        {index}
      </button>
    )
  }
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(styleButtons(i))
  }
  return (
    <div className="flex flex-wrap justify-center pt-8">
      {prevPage && (
        <button
          className="mx-4 bg-blue-500 hover:bg-blue-700 text-white tracking-widest px-2 rounded h-7"
          onClick={prevPage}
        >
          Previous
        </button>
      )}
      {pageButtons}
      {nextPage && (
        <button
          className="mx-4 bg-blue-500 hover:bg-blue-700 text-white tracking-widest px-2 rounded h-7"
          onClick={nextPage}
        >
          Next
        </button>
      )}
    </div>
  )
}
export default Pagination
