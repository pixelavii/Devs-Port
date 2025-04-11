import DevDash from "@/components/DevDash";
import * as React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

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
  if (!token) return <div className="text-white bg-black md:text-5xl text-xl flex justify-center items-center h-[100vh] w-full">Loading...</div>

  return (
    <>
      <Head>
        <title>Devs Port – Developer’s Digital Identity</title>
        <meta name="description" content="Consolidate your online presence into one powerful developer profile. Showcase GitHub, LinkedIn, LeetCode, and more with Devs Port." />
        <meta name="keywords" content="Devs Port, Developer Portfolio, Create Easy Developer's Profile" />
        <meta name="author" content="Avinash" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Devs Port – Developer’s Digital Identity" />
        <meta property="og:description" content="Build and share your complete developer portfolio with a single link. One profile. Every platform." />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://devsport.vercel.app/" />
      </Head>
      <DevDash />
    </>

  )
}
