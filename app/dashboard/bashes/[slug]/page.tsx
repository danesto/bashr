import { TestCases } from "@/components/app/test-cases/test-cases";

// this is a page for customizing and editing bash; adding test case scenarios, etc.
//todo: add new page where bug bash is going to be conducted between teams using web sockets - but try to reuse same components if not possible then create new ones
export default function Bush({ params }: { params: Record<string, string> }) {
  return (
    <div className="grid grid-rows-12 gap-0 dark gap-y-4 pl-10">
      <h2 className="dark:text-stone-100 row-span-2 text-lg font-semibold">
        slug: {params.slug}
      </h2>

      <div className="row-span-10 grid grid-cols-3 items-baseline gap-x-4 dark:text-stone-100">
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
