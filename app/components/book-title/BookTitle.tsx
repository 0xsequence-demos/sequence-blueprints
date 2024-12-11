import { Link } from "react-router";
import { Book, Topic } from "~/content/types";

export function BookTitle({ book, topic }: { book: Book; topic: Topic }) {
  return (
    <div className="relative grid grid-cols-4 gap-3 flex-1 md:px-12 md:py-12">
      <div className="hidden md:block absolute inset-0 w-full h-full z-0 gradient-mask border rounded-t-[12px] border-white/10 bg-white/5"></div>
      <div className="col-span-3 z-10 flex flex-col gap-3">
        <Link
          to={topic.path}
          className="text-15 font-medium mb-1 flex items-center gap-3"
        >
          <img src={`/${topic.icon}`} alt="" width="20" height="20" />

          {topic.title}
        </Link>
        <h1 className="text-32 sm:text-40 font-bold sm:leading-[1.05em] leading-tight">
          {book.title}
        </h1>
        {book.description ? (
          <p className="text-14">{book.description}</p>
        ) : null}
      </div>
      <div>
        {book.hero ? (
          <img
            src={`/${book.hero.image}`}
            alt={book.hero.alt ?? ""}
            width={book.hero.width}
            height={book.hero.height}
            className={`absolute ${book.hero.className}`}
          />
        ) : null}
      </div>
    </div>
  );
}
