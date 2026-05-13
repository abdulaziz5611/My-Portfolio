import { getSiteContent } from "@/lib/content";
import { AdminDashboard } from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const content = await getSiteContent();
  return <AdminDashboard initial={content} />;
}
