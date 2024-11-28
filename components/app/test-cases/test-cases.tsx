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
import { useState } from "react";
import { TestCaseDrawer } from "./test-case-drawer";

export type TestCasesProps = {
  testCases: {
    id: number;
    name: string;
    description: string;
    participants: string[];
    selectedAssignee?: string;
  }[];

  onAssigneeChange?: (value: string, testCaseId: number) => void;
};

const TestCases = ({ testCases, onAssigneeChange }: TestCasesProps) => {
  const [isTestCaseDrawwerOpen, setIsTestCaseDrawwerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsTestCaseDrawwerOpen(true);
  };

  const toggleDrawer = () => {
    setIsTestCaseDrawwerOpen(!isTestCaseDrawwerOpen);
  };

  const onAssigneeSelect = (value: string) => {
    const [_, id] = value.split(",");

    console.log("id", id);

    if (onAssigneeChange) {
      onAssigneeChange(value, parseInt(id));
    }
  };

  return (
    <Card>
      <CardHeader>
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
                defaultValue={testCase.selectedAssignee}
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
