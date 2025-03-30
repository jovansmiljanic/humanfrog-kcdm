import { Novice } from "@/components/novice";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Novice />
    </Suspense>
  );
}
