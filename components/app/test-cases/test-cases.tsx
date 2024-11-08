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

type TestCasesProps = {
  testCases: {
    id: number;
    name: string;
    description: string;
    participants: string[];
  }[];
};

const TestCases = ({ testCases }: TestCasesProps) => {
  const [isTestCaseDrawwerOpen, setIsTestCaseDrawwerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsTestCaseDrawwerOpen(true);
  };

  const toggleDrawer = () => {
    setIsTestCaseDrawwerOpen(!isTestCaseDrawwerOpen);
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
                options={[
                  { label: "Danilo Stojanovic", value: "danilo" },
                  { label: "Jon Doe", value: "jon doe" },
                ]}
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
