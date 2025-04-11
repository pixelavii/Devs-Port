import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

const devs = () => {
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
        <meta property="og:url" content="https://devsport.vercel.app/devs" />
      </Head>

      {/* For desktop view */}

      <div className="text-white md:flex hidden p-5 flex-col justify-center bg-black shadow-2xl shadow-gray-900">
        <div className="text-center flex justify-center items-center p-5">
          <Link href="/register">
            <p className="bg-gray-300 hover:cursor-pointer p-2 rounded-2xl text-black font-semibold flex justify-center items-center gap-2 hover:text-sky-700">
              💡Join us today and build a powerful online presence in just a few
              clicks!
              <OpenInNewIcon />
            </p>
          </Link>
        </div>
        <div className="items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-[55px]">
              🔗Developer's Digital Identity, All in One Place !
            </h1>
            <div>
              <p className="text-[25px] text-gray-200">
                Tired of managing multiple profiles across different platforms ?
              </p>
              <p className="text-[35px] text-gray-200">
                Let us do the work for you !
              </p>
              <p className="w-[50vw] text-gray-400 text-[18px] m">
                Our platform is your one-stop hub for showcasing your professional
                and social presence — combining your GitHub, LinkedIn,
                StackOverflow, LeetCode, Instagram, and more into a single,
                dynamic portfolio.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-3">
            <Link href="/login">
              <Button variant="contained">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="contained">Register</Button>
            </Link>
          </div>

          <div className="mt-7">
            <div>
              <h2 className="text-2xl font-semibold">✨ Why Choose Us?</h2>
              <div className="mt-2 flex flex-col gap-3">
                <p className="text-lg text-gray-300">
                  ✅ One Profile, Every Platform – Keep all your professional and
                  social profiles in sync.
                </p>
                <p className="text-lg text-gray-300">
                  {" "}
                  ✅ Automated Data Collection – No manual updates needed, we
                  fetch the latest info for you.
                </p>
                <p className="text-lg text-gray-300">
                  {" "}
                  ✅ Showcase Your Achievements – Let Recruiters, Peers, and
                  Collaborators see your full digital footprint.
                </p>
                <p className="text-lg text-gray-300">
                  {" "}
                  ✅ Share With Ease – One Link, Endless Opportunities!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center m-5 pt-10 flex justify-center items-center">
            <Link href="/register">
              <p className="bg-gray-300 hover:cursor-pointer p-3 rounded-2xl text-black font-semibold hover:text-sky-700">
                🚀 Join us today and transform how you present your digital self —
                because your achievements deserve to shine, all together in one
                place.
              </p>
            </Link>
          </div>
        </div>
      </div>



      {/* For mobile view */}

      <div className="text-white flex md:hidden p-5 flex-col justify-center bg-black shadow-2xl shadow-gray-900">
        <div className="text-center flex justify-center items-center p-5">
          <Link href="/register">
            <p className="bg-gray-300 hover:cursor-pointer text-sm p-2 rounded-2xl text-black font-semibold flex justify-center items-center gap-2 hover:text-sky-700">
              💡Join us today and build a powerful online presence in just a few
              clicks!
              <OpenInNewIcon />
            </p>
          </Link>
        </div>
        <div className="items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-[30px] font-semibold">
              🔗Developer's Digital Identity, All in One Place !
            </h1>
            <div>
              <p className="text-[20px] text-gray-200">
                Tired of managing multiple profiles across different platforms ?
              </p>
              <p className="text-[25px] text-gray-200">
                Let us do the work for you !
              </p>
              <p className="text-gray-400 text-[20px] mt-1">
                Our platform is your one-stop hub for showcasing your professional
                and social presence — combining your GitHub, LinkedIn,
                StackOverflow, LeetCode, Instagram, and more into a single,
                dynamic portfolio.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-3">
            <Link href="/login">
              <Button variant="contained">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="contained">Register</Button>
            </Link>
          </div>

          <div className="mt-5">
            <div>
              <h2 className="text-2xl font-semibold">✨ Why Choose Us?</h2>
              <div className="mt-2 flex flex-col gap-3">
                <p className="text-md text-gray-300">
                  ✅ One Profile, Every Platform – Keep all your professional and
                  social profiles in sync.
                </p>
                <p className="text-md text-gray-300">
                  {" "}
                  ✅ Automated Data Collection – No manual updates needed, we
                  fetch the latest info for you.
                </p>
                <p className="text-md text-gray-300">
                  {" "}
                  ✅ Showcase Your Achievements – Let Recruiters, Peers, and
                  Collaborators see your full digital footprint.
                </p>
                <p className="text-md text-gray-300">
                  {" "}
                  ✅ Share With Ease – One Link, Endless Opportunities!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center m-5 flex justify-center items-center">
            <Link href="/register">
              <p className="bg-gray-300 hover:cursor-pointer text-sm p-3 rounded-2xl text-black font-semibold hover:text-sky-100">
                🚀 Join us today and transform how you present your digital self —
                because your achievements deserve to shine, all together in one
                place.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default devs;
