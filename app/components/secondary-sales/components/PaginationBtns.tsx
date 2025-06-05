interface PaginationBtnsProps {
  onChangePage: (value: number) => void;
  currentPage: number;
  hasMorePages: boolean;
  children: React.ReactNode
}

export function PaginationBtns({
  children,
  onChangePage,
  currentPage,
  hasMorePages,
}: PaginationBtnsProps) {
  const isPageOne = currentPage === 1;
  return (
    <div className="flex gap-4 justify-center items-center">
      <button
        className={`py-3 px-3 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] font-bold text-14 cursor-pointer ${isPageOne && "opacity-50"}`}
        onClick={() => {
          if (isPageOne) return;
          if (currentPage - 1 <= 0) onChangePage(1);
          else onChangePage(currentPage - 1);
        }}
        disabled={isPageOne}
      >
        {`<`}
      </button>
      {children}
      <button
        className={`py-3 px-3 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] font-bold text-14 cursor-pointer ${!hasMorePages && "opacity-50"}`}
        onClick={() => {
          if (!hasMorePages) return;
          onChangePage(currentPage + 1);
        }}
        disabled={!hasMorePages}
      >
        {`>`}
      </button>
    </div>
  );
}
