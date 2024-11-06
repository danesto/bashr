"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "../app-table";

//todo: add data prop; move columns to columns.tsx

const BashesTable = () => {
  return (
    <DataTable
      columns={[
        {
          accessorKey: "createdAt",
          header: "Organized",
        },
        {
          accessorKey: "title",
          header: "Title",
        },
        {
          accessorKey: "description",
          header: "Description",
        },
        {
          accessorKey: "testCases",
          header: "Test Cases",
        },
        {
          accessorKey: "participants",
          header: "No. Participans",
        },
        {
          accessorKey: "action",
          header: "",
          enableHiding: true,
          cell: ({ row }) => {
            console.log("cell", row);
            const slug = row.original.id;

            return (
              <Button variant="ghost" asChild>
                <Link href={`/dashboard/bashes/${slug}`}>...</Link>
              </Button>
            );
          },
        },
      ]}
      data={[
        {
          id: "728ed52f",
          description: "Lorem ipsum dolor sit amet elit...",
          status: "pending",
          title: "New Release 2.0",
          participants: 4,
          createdAt: "23.09",
          testCases: 20,
        },
      ]}
    />
  );
};

export { BashesTable };
