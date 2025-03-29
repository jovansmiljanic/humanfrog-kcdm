type TPaginationProps = {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
};

export const Pagination = (props: TPaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-5 md:gap-10 pt-4">
      <button
        onClick={() => props.goToPage(props.currentPage - 1)}
        disabled={props.currentPage === 1}
        className="px-4 py-2 text-primary transition cursor-pointer disabled:opacity-50"
        aria-label="Previous page"
      >
        <svg
          width="45"
          height="10"
          viewBox="0 0 45 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5L7.5 9.33013V0.669873L0 5ZM6.75 5.75H45V4.25H6.75V5.75Z"
            fill="#4BAC87"
          />
        </svg>
      </button>

      <div className="flex items-center gap-4 md:gap-8">
        {Array.from({ length: props.totalPages }, (_, i) => {
          const page = i + 1;
          const isActive = page === props.currentPage;
          return (
            <button
              key={page}
              onClick={() => props.goToPage(page)}
              className={`text-[20px] cursor-pointer transition ${
                isActive
                  ? "text-dark-green"
                  : "text-primary hover:text-dark-green"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => props.goToPage(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
        className="px-4 py-2 text-primary transition cursor-pointer disabled:opacity-50"
        aria-label="Next page"
      >
        <svg
          width="45"
          height="10"
          viewBox="0 0 45 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45 5L37.5 0.669873V9.33013L45 5ZM38.25 4.25H0V5.75H38.25V4.25Z"
            fill="#4BAC87"
          />
        </svg>
      </button>
    </div>
  );
};
