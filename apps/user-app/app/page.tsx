import { PrismaClient } from "@repo/database/client";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return <div className="bg-green-500">Hello</div>;
}
