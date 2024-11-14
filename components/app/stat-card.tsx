import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type StatCardProps = {
  title: string;
  statNumber: number;
};

export const StatCard = ({ title, statNumber }: StatCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl">{statNumber}</CardTitle>
      </CardHeader>
    </Card>
  );
};
