import {
  getTestCases,
  onTestCaseUpdate,
  updateAssigne,
} from "@/actions/test-cases";
import {
  TestCases,
  TestCasesProps,
} from "@/components/app/test-cases/test-cases";
import { createClient } from "@/lib/supabase/server";

export default async function BashSlugPage() {
  const sb = await createClient();
  const testCasesData = await getTestCases({ bashId: 1 });

  sb.channel("testCases")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "testCases" },
      onTestCaseUpdate
    )
    .subscribe();

  console.log("test", testCasesData);

  const testCases = testCasesData?.map((testCase: any) => {
    return {
      name: testCase?.name,
      participants: ["danilo", "tanja"],
      description: testCase?.description,
      id: testCase?.id,
      selectedAssignee: testCase?.assignee,
    };
  });

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
          testCases={testCases as TestCasesProps["testCases"]}
          onAssigneeChange={updateAssigne}
        />
      </div>
    </div>
  );
}
