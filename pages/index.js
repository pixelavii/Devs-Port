import DevDash from "@/components/DevDash";
import * as React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const userID =
    typeof window !== "undefined" ? localStorage.getItem("userID") : null;
  const user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  useEffect(() => {
    if (!token) {
      router.push("/devs");
    }
  }, []);
  if (!token) return <div>Loading...</div>

  return <DevDash />;
}
