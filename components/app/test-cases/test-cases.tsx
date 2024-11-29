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

          console.log("pdatedTestCase.assignee", updatedTestCase.assignee);

          setTestCases((testCases) => {
            return testCases.map((testCase) => {
              if (testCase.id === updatedTestCase.id) {
                return {
                  ...testCase,
                  selectedAssignee: updatedTestCase.assignee,
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
  }, [supabase, onAssigneeChange]);

  const handleOpenDrawer = () => {
    setIsTestCaseDrawwerOpen(true);
  };

  const toggleDrawer = () => {
    setIsTestCaseDrawwerOpen(!isTestCaseDrawwerOpen);
  };

  const onAssigneeSelect = (value: string) => {
    const [, id] = value.split(",");

    console.log("id", id);

    if (onAssigneeChange) {
      onAssigneeChange(value, parseInt(id));
    }
  };

  return (
    <Card>
      <CardHeader>
        {testCases[0].selectedAssignee}
        {testCases[1].selectedAssignee}
        <CardTitle>Test Cases</CardTitle>
        <CardDescription>
          These are test scenarios related to the bash. Pick one to test
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {testCases.map((testCase) => {
          console.log("selected assignee", testCase.selectedAssignee);

          return (
            <div
              key={testCase.name}
              className="flex items-center justify-between"
            >
              <Button
                variant="link"
                className="pl-0"
                onClick={handleOpenDrawer}
              >
                <QuestionMarkCircledIcon />
                {testCase.name}
              </Button>
              <Combobox
                selected={testCase.selectedAssignee}
                options={testCase.participants.map((participant) => ({
                  label: participant,
                  value: `${participant},${testCase.id}`,
                }))}
                onSelect={onAssigneeSelect}
              />
            </div>
          );
        })}
      </CardContent>
      <TestCaseDrawer
        testCase={testCases[0]}
        isOpen={isTestCaseDrawwerOpen}
        onOpenChange={toggleDrawer}
      />
    </Card>
  );
};

export { TestCases };
