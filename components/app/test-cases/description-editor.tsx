import { useDebounce } from "@/hooks/use-debounce";
import { ChangeEvent, useEffect, useState } from "react";

type DescriptionEditorProps = {
  defaultValue: string;
  testCaseId: number;
  onDebounceCallback: (value: string) => void;
};

export const DescriptionEditor = ({
  defaultValue = "",
  testCaseId,
  onDebounceCallback,
}: DescriptionEditorProps) => {
  const [value, setValue] = useState(defaultValue);
  const { debouncedValue } = useDebounce(value, 1000);

  //   console.log("debouncedValue", defaultValue);

  //   //   Sync state with defaultValue when it changes
  //   useEffect(() => {
  //     if (defaultValue !== debouncedValue) {
  //       //   setValue(defaultValue);
  //     }
  //   }, [defaultValue, debouncedValue]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue !== defaultValue) {
      onDebounceCallback(debouncedValue);
      //   setValue(debouncedValue);
    }
  }, [debouncedValue, defaultValue, onDebounceCallback]);

  return (
    <>
      <textarea
        // value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="p-2 bg-inherit border rounded focus-visible:outline-offset-[4px] focus-visible:outline-slate-400 focus-visible:outline-double"
      />

      {defaultValue}
    </>
  );
};
