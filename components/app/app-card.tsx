import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import Link from "next/link";

type AppCardProps = {
  title: string;
  createdAt: string;
  description: string;
  href?: string;
};

const AppCard = ({
  title,
  description,
  createdAt,
  href = "", // todo: add default value to be slug
}: AppCardProps) => {
  return (
    <Card className="col-span-1">
      <CardHeader className="items-baseline">
        <Button variant="link" className="tracking-wider p-0" asChild>
          <Link href={href} className="text-base">
            {title}
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="gap-3">
        {description}
        <CardDescription className="flex mt-2 gap-2">
          <CalendarIcon size={16} />
          {createdAt}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={href}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { AppCard };
