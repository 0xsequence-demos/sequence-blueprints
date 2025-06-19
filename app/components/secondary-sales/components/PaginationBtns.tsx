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
    <div className="flex gap-4 max-md:gap-4 max-lg:gap-2 justify-center items-center">
      <button
        className={`py-3 px-3 max-md:!px-3 max-md:!py-3 max-lg:!px-1 max-lg:!py-1 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] max-md:min-w-[50px] max-lg:min-w-[25px] font-bold text-14 max-md:text-14 max-lg:text-10 cursor-pointer ${isPageOne && "opacity-50"}`}
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
        className={`py-3 px-3 max-md:!px-3 max-md:!py-3 max-lg:!px-1 max-lg:!py-1 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] max-md:min-w-[50px] max-lg:min-w-[25px] font-bold text-14 max-md:text-14 max-lg:text-10 cursor-pointer ${!hasMorePages && "opacity-50"}`}
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
