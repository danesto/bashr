import { BashesTable } from "@/components/app/bashes-table/bashes-table";

export default async function Bashes() {
  return (
    <div className="dark:text-slate-50 grid grid-rows-12 gap-y-4 pl-10">
      <div className="row-span-2">
        <h2 className="text-lg font-semibold">My Bashes</h2>
      </div>
      <div className="row-span-12">
        <BashesTable
          data={[
            {
              id: "728ed52f",
              description: "Lorem ipsum dolor sit amet elit...",
              status: "pending",
              title: "New Release 2.0",
              participants: 4,
              createdAt: "23.09",
              testCases: 20,
            },
          ]}
        />
      </div>
    </div>
  );
}
