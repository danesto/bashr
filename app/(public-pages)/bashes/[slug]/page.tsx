import { getTestCases, updateAssigne } from "@/actions/test-cases";
import {
  TestCases,
  TestCasesProps,
} from "@/components/app/test-cases/test-cases";

export default async function BashSlugPage() {
  const testCasesData = await getTestCases({ bashId: 1 });

  console.log("test", testCasesData);

  const testCases = testCasesData?.map((testCase: any) => {
    return {
      name: testCase?.name,
      participants: testCase.bashes.participants,
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
          initialTestCases={testCases as TestCasesProps["initialTestCases"]}
          onAssigneeChange={updateAssigne}
        />
      </div>
    </div>
  );
}
