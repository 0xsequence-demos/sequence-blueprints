import { Button } from "@0xsequence-demos/boilerplate-design-system";

export function CollectableSkeleton() {
	return (
		<div className="flex flex-col w-[350px] px-3 py-3 border border-transparent bg-[#14062a] text-left rounded-[1rem] overflow-clip opacity-50">
			<div className="w-full aspect-square rounded-[0.5rem] bg-grey-800 "></div>

			<div className="flex flex-col gap-4 pt-4">
        <div className="flex flex-col gap-1 px-4">
          <span className="text-20 font-bold leading-tight">---</span>
        </div>

        <dl className="flex justify-between gap-4 border-t border-grey-800 px-6 py-3">
          <div className="flex flex-col">
            <dt className="text-11 font-medium text-grey-200 leading-[1em]">
              Token Id
            </dt>
            <dd className="text-white font-bold text-14">---</dd>
          </div>
        </dl>
      </div>
				<div className="flex flex-col gap-3">
					<Button
						variant="primary"
						className="rounded-[0.5rem] w-full font-bold text-14"
					>
						Loading
					</Button>
				</div>
		</div>
	);
}
