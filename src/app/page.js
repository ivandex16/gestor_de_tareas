import { redirect } from "next/navigation";

export default function RedirectPage() {
  redirect("pages/dashboard/allProyects");
}
