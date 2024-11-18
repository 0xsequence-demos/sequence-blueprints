import { Link } from "@remix-run/react";
import { Icon } from "~/components/icon/Icon";
import { InheritLinkFromChild } from "~/components/inherit-link-from-child/InheritLinkFromChild";
import { Main } from "~/components/main/Main";
import Topics from "~/content/topics";

export default function IndexRoute() {
  return (
    <Main asChild>
      <main style={{ backgroundImage: "url('/bg-chessboard.svg')" }}>
        <div className="w-full max-w-screen-xl px-8 py-16 gap-10 flex flex-col">
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <span className="flex gap-4 items-center">
              <Icon name="sequence-logo" className="size-12 md:size-20" />
              <h1 className="text-24 md:text-48 font-bold">
                Sequence Playbook
              </h1>
            </span>
            <span>
              Mini tutorials on how to use{" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sequence
              </a>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-3 max-w-[256px] md:max-w-none mx-auto">
            {Topics.map((topic) => (
              <InheritLinkFromChild asChild key={topic.path}>
                <div
                  className="rounded-[1rem] p-10 bg-white/10 flex flex-col items-center gap-4 aspect-square justify-center bg-img bg-no-repeat bg-cover"
                  style={
                    {
                      "--bg-image": `url('/${topic.theme.bgImage}.svg')`,
                    } as React.CSSProperties
                  }
                >
                  <Icon
                    name={topic.icon}
                    className="size-[3rem] md:size-[4.5rem]"
                  />

                  <Link
                    to={topic.path}
                    className="text-18 md:text-28 font-bold text-center"
                  >
                    {topic.title}
                  </Link>
                  <p className="line-clamp-2 text-center">
                    {topic.description}
                  </p>
                </div>
              </InheritLinkFromChild>
            ))}
          </div>
        </div>
      </main>
    </Main>
  );
}
