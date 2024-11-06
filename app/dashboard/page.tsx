import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Dashboard() {
  return (
    <div className="grid grid-rows-12 gap-0 dark gap-y-4 pl-10">
      <h2 className="text-stone-100 row-span-2 text-base font-semibold">
        most recent bashes
      </h2>

      <div className="row-span-10 grid grid-cols-5 items-baseline gap-x-4">
        <Card>
          <CardHeader className="items-baseline">
            <Button variant="link" className="tracking-wider p-0" asChild>
              <Link href="/bashes/slug" className="text-base">
                New release 2.0
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="gap-3">
            We`re testing Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iusto, animi?
            <CardDescription className="flex mt-2 gap-2">
              <CalendarIcon />
              23.09
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Open</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="items-baseline">
            <Button variant="link" className="tracking-wider p-0" asChild>
              <Link href="/bashes/slug" className="text-base">
                New release 2.0
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="gap-3">
            We`re testing Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iusto, animi?
            <CardDescription className="flex mt-2 gap-2">
              <CalendarIcon />
              23.09
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Open</Button>
          </CardFooter>
        </Card>
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
