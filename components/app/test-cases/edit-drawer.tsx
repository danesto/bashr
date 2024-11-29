import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChangeEvent, useState } from "react";

type TestCaseDrawerProps = {
  testCase: {
    id: number;
    name: string;
    description: string;
    participants: string[];
  }; // to be continued...
  isOpen: boolean;
  onSave: (value: string) => void;
  onOpenChange: (isOpen: boolean) => void;
};

export const EditDrawer = ({
  testCase,
  isOpen,
  onSave,
  onOpenChange,
}: TestCaseDrawerProps) => {
  const { id, name, description } = testCase;
  const [value, setValue] = useState(description);

  const handleChangeFindings = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleOnSave = () => {
    onSave(value);
    // onOpenChange(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="dark text-white sm:w-[600px] sm:max-w-[1000px] flex flex-col justify-between overflow-auto">
        <div>
          <SheetHeader>
            <SheetTitle>
              {name} <span>{id}</span>
            </SheetTitle>
            <SheetDescription>{description}</SheetDescription>
            <SheetDescription className="text-base font-semibold dark:text-green-500">
              Expected Outcome: this should happen
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6">
            <label htmlFor="findings" className="text-stone-300">
              Describe the bugs or findings for this test case:
            </label>
            <textarea
              value={value}
              className="w-full h-32 p-2 bg-stone-900 border rounded focus-visible:outline-offset-[4px] focus-visible:outline-slate-400 focus-visible:outline-double mt-3"
              placeholder="Enter your findings here..."
              onChange={handleChangeFindings}
            ></textarea>
            <SheetFooter>
              <Button onClick={handleOnSave}>Save</Button>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
