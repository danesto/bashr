import { Button } from "@/components/ui/button";
import { Bash } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

const columns: ColumnDef<Bash, unknown>[] = [
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
];

export { columns };
