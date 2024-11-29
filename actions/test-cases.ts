"use server";

import { TablesUpdate } from "@/lib/supabase.types";
import { createClient } from "@/lib/supabase/server";

type GetTestCasesParams = {
  bashId: number;
};

const getTestCases = async ({ bashId }: GetTestCasesParams) => {
  const sb = await createClient();

  const { data, error } = await sb
    .from("testCases")
    .select("*, bashes (name, id, participants)")
    .eq("bashId", bashId)
    .order("id", { ascending: true });

  if (error) {
    console.log("there was an error fetching test cases: ", error);
    return;
  }

  return data;
};

const updateAssigne = async (assignee: string, testCaseId: number) => {
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

const updateTestCase = async ({
  description,
  id,
  assignee,
}: TablesUpdate<"testCases">) => {
  const sb = await createClient();

  console.log("ID", id);

  if (!id) {
    console.log("test case id is required");
    return;
  }

  const { data, error } = await sb
    .from("testCases")
    .update({
      description,
      assignee,
    })
    .eq("id", id);

  if (error) {
    console.log("there was an error updating test case: ", error);
    return;
  }

  return data;
};

const onTestCaseUpdate = (payload: unknown) => {
  console.log("test case changeg: ", payload);
};

export { getTestCases, updateAssigne, onTestCaseUpdate, updateTestCase };
