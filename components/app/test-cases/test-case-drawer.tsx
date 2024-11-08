import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

type TestCaseDrawerProps = {
  testCase: {
    id: number;
    name: string;
    description: string;
    participants: string[];
  }; // to be continued...
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export const TestCaseDrawer = ({
  testCase,
  isOpen,
  onOpenChange,
}: TestCaseDrawerProps) => {
  const { id, name, description } = testCase;

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
          <div className="mt-8">
            <div>scenario goes here screenshots etc</div>
            <p>
              {" "}
              1. click here <br /> 2. then go here 1. click here <br /> 2. then
              go here 1. click here <br /> 2. then go here 1. click here <br />{" "}
              2. then go here 1. click here <br /> 2. then go here 1. click here{" "}
              <br /> 2. then go here 1. click here <br /> 2. then go here 1.
              click here <br /> 2. then go here Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Ab, eos?
              <Image src={"/file.svg"} width={200} height={100} alt="tes" />
              <Image src={"/file.svg"} width={200} height={100} alt="tes" />
              <Image src={"/file.svg"} width={200} height={100} alt="tes" />
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
