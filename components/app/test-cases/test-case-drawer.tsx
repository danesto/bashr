import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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
      <SheetContent className="dark text-white sm:w-[600px] sm:max-w-[1000px]">
        <SheetHeader>
          <SheetTitle>
            {name} <span>{id}</span>
          </SheetTitle>
          <SheetDescription>{description}</SheetDescription>
          <div>scenario goes here screenshots etc</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
