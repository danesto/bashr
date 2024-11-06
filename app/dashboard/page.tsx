import { AppCard } from "@/components/app/app-card";
import { Button } from "@/components/ui/button";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Dashboard() {
  return (
    <div className="grid grid-rows-12 gap-0 dark gap-y-4 pl-10">
      <h2 className="dark:text-stone-100 row-span-2 text-lg font-semibold">
        Most Recent Bashes
      </h2>

      <div className="row-span-10 grid grid-cols-4 items-baseline gap-x-4">
        <AppCard
          title="New Release 2.0"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolores!"
          createdAt="23.09"
          href="/dashbor"
        />
        <AppCard
          title="New Release 2.0"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolores!"
          createdAt="23.09"
          href="/dashbor"
        />

        <Button
          variant="link"
          className="tracking-wider self-end w-max"
          size="sm"
          asChild
        >
          <Link href="/dashboard/bashes">
            See All <ChevronRightIcon className="!h-3 !w-3" />
          </Link>
        </Button>
      </div>
      <div className="text-white">dsas</div>
    </div>
  );
}
