"use client";

import { Bash } from "@/lib/types";
import { DataTable } from "../app-table";
import { columns } from "./columns";

type BashesTableProps = {
  data: Bash[];
};

const BashesTable = ({ data }: BashesTableProps) => {
  return <DataTable columns={columns} data={data} />;
};

export { BashesTable };
