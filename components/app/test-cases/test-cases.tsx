"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { TestCaseDrawer } from "./test-case-drawer";
import { createClient } from "@/lib/supabase/client";
import { Edit } from "lucide-react";
import { EditDrawer } from "./edit-drawer";
import { updateTestCase } from "@/actions/test-cases";

export type TestCasesProps = {
  initialTestCases: {
    id: number;
    name: string;
    description: string;
    participants: string[];
    selectedAssignee?: string;
  }[];

  onAssigneeChange?: (value: string, testCaseId: number) => void;
};

const TestCases = ({ initialTestCases, onAssigneeChange }: TestCasesProps) => {
  const [testCases, setTestCases] = useState(initialTestCases);
  const [isTestCaseDrawwerOpen, setIsTestCaseDrawwerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState<
    (typeof initialTestCases)[0]
  >(initialTestCases[0]);

  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel("realtime-test-cases")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "testCases",
        },
        (payload) => {
          console.log("ok-live changed", payload);
          const updatedTestCase = payload.new;

          setTestCases((testCases) => {
            return testCases.map((testCase) => {
              if (testCase.id === updatedTestCase.id) {
                return {
                  ...testCase,
                  selectedAssignee: updatedTestCase.assignee,
                  description: updatedTestCase.description,
                };
              }

              return testCase;
            });
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const handleOpenDrawer = () => {
    setIsTestCaseDrawwerOpen(true);
  };

  const toggleDrawer = () => {
    setIsTestCaseDrawwerOpen(!isTestCaseDrawwerOpen);
  };

  const handleOpenEditDrawer =
    (testCase: (typeof initialTestCases)[0]) => () => {
      setSelectedTestCase(testCase);
      setIsEditDrawerOpen(true);
    };

  const toggleEditDrawer = () => {
    setIsEditDrawerOpen(!isEditDrawerOpen);
  };

  const onAssigneeSelect = (value: string) => {
    const [, id] = value.split(",");

    console.log("id", id);

    if (onAssigneeChange) {
      onAssigneeChange(value, parseInt(id));
    }
  };

  // const handleDebouncedUpdate = async (id: number, value: string) => {
  //   setTestCases((prevTestCases) =>
  //     prevTestCases.map((testCase) =>
  //       testCase.id === id ? { ...testCase, description: value } : testCase
  //     )
  //   );

  //   // Update the database
  //   await updateTestCase({ id, description: value });
  // };
  // TODO: use different component to update the description and just display it here
  return (
    <Card className="col-span-10">
      <CardHeader>
        {/* {testCases[0].description} */}

        <CardTitle>Test Cases</CardTitle>
        <CardDescription>
          These are test scenarios related to the bash. Pick one to test
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="grid grid-cols-3 items-center justify-between">
          <p className="text-base font-semibold">Test cases</p>
          <p className="text-base font-semibold">Assignee</p>
          <p className="text-base font-semibold">Findings</p>
        </div>
        {testCases.map((testCase) => {
          return (
            <div
              key={testCase.name}
              className="grid grid-cols-3 items-start justify-between"
            >
              <div className="col-span-1 truncate">
                <Button
                  variant="link"
                  className="pl-0 truncate"
                  onClick={handleOpenDrawer}
                >
                  <QuestionMarkCircledIcon />
                  {testCase.name}
                </Button>
              </div>
              <div className="col-span-1">
                <Combobox
                  selected={testCase.selectedAssignee}
                  options={testCase.participants.map((participant) => ({
                    label: participant,
                    value: `${participant},${testCase.id}`,
                  }))}
                  onSelect={onAssigneeSelect}
                />
              </div>
              <Button
                variant="secondary"
                className="whitespace-normal text-left flex justify-between"
                onClick={handleOpenEditDrawer(testCase)}
              >
                <p>{testCase.description}</p>
                <Edit />
              </Button>
            </div>
          );
        })}
      </CardContent>
      <TestCaseDrawer
        testCase={testCases[0]}
        isOpen={isTestCaseDrawwerOpen}
        onOpenChange={toggleDrawer}
      />

      <EditDrawer
        testCase={selectedTestCase}
        isOpen={isEditDrawerOpen}
        onSave={(value) => {
          updateTestCase({ ...selectedTestCase, description: value });
          setIsEditDrawerOpen(false);
        }}
        onOpenChange={toggleEditDrawer}
      />
    </Card>
  );
};

export { TestCases };
