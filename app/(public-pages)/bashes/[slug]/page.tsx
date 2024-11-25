import { TestCases } from "@/components/app/test-cases/test-cases";

export default function BashSlugPage() {
  return (
    <div className="grid grid-cols-12 gap-0 dark gap-y-8 pl-10 pt-10">
      <div className="col-span-12 flex gap-4 items-center">
        <h2 className="dark:text-stone-100 text-lg font-semibold">
          Bug Bash - New Feature release 2.0
        </h2>
      </div>

      <div className="col-span-12 grid grid-cols-3 items-baseline gap-x-4 dark:text-stone-100">
        {/* <h3 className="col-span-4 text-base font-semibold">test cases</h3> */}

        <TestCases
          testCases={[
            {
              name: "Submiting a form",
              participants: [],
              description: "In this scenario we are testing form submission.",
              id: 1,
            },
            {
              name: "Get all names after search",
              participants: [],
              id: 2,
              description: "",
            },
            {
              name: "Some test case no. 3",
              participants: [],
              id: 3,
              description: "",
            },
          ]}
        />
      </div>
    </div>
  );
}
