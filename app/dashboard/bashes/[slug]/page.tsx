import { TestCases } from "@/components/app/test-cases/test-cases";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

// this is a page for customizing and editing bash; adding test case scenarios, etc.
//todo: add new page where bug bash is going to be conducted between teams using web sockets - but try to reuse same components if not possible then create new ones
export default function Bush({ params }: { params: Record<string, string> }) {
  return (
    <div className="grid grid-cols-12 gap-0 dark gap-y-8 pl-10">
      <div className="col-span-12 flex gap-4 items-center">
        <h2 className="dark:text-stone-100 text-lg font-semibold">
          slug: {params.slug}
        </h2>
        <Button asChild>
          <Link href="/">
            <Play size={10} fill="green" stroke="green" />
            Start the bash
          </Link>
        </Button>
      </div>

      <div className="col-span-12 grid grid-cols-3 items-baseline gap-x-4 dark:text-stone-100">
        {/* <h3 className="col-span-4 text-base font-semibold">test cases</h3> */}

        <TestCases
          initialTestCases={[
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
