"use server";

import { createClient } from "@/lib/supabase/server";

type GetTestCasesParams = {
  bashId: number;
};

const getTestCases = async ({ bashId }: GetTestCasesParams) => {
  const sb = await createClient();

  const { data, error } = await sb
    .from("testCases")
    .select("*")
    .eq("bashId", bashId);

  if (error) {
    console.log("there was an error fetching test cases: ", error);
    return;
  }

  return data;
};

const updateAssigne = async (assignee: string, testCaseId: number) => {
  console.log("edited", assignee);
  const sb = await createClient();
  const { error } = await sb
    .from("testCases")
    .update({ assignee })
    .eq("id", testCaseId);

  if (error) {
    console.log("there was an error updating assignee: ", error);
    return false;
  }

  return true;
};

const onTestCaseUpdate = (payload: unknown) => {
  console.log("test case changeg: ", payload);
};

export { getTestCases, updateAssigne, onTestCaseUpdate };
