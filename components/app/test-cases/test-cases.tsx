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

const TestCases = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Cases</CardTitle>
        <CardDescription>
          These are test scenarios related to the bash. Pick one to test
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Button variant="link" className="pl-0">
            <QuestionMarkCircledIcon />
            Test Case 1
          </Button>
          <Combobox
            options={[
              { label: "Danilo Stojanovic", value: "danilo" },
              { label: "Jon Doe", value: "jon doe" },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export { TestCases };
