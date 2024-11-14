import { AppCard } from "@/components/app/app-card";
import { StatCard } from "@/components/app/stat-card";
import { Button } from "@/components/ui/button";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Dashboard() {
  return (
    <div className="grid grid-rows-12 gap-0 dark gap-y-10 pl-10 pt-8">
      <div className="row-span-4 grid grid-cols-4 items-start gap-x-4 gap-y-6">
        <h2 className="dark:text-stone-100 col-span-4 text-lg font-semibold">
          Most Recent Bashes
        </h2>
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
      <div className="row-span-2 text-white grid grid-cols-5 gap-5">
        <StatCard title="Total Bashes" statNumber={2} />
        <StatCard title="Total Test Scenarios" statNumber={64} />
        <StatCard title="Avg. Test Scenarios per Bash" statNumber={32} />
      </div>
    </div>
  );
}
