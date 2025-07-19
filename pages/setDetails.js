import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const SetDetails = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [stackOverflow, setStackOverflow] = useState("");
  const [leetCode, setLeetCode] = useState("");
  const [hackerrank, setHackerrank] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [about, setAbout] = useState("");
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const userID =
    typeof window !== "undefined" ? localStorage.getItem("userID") : null;
  const username =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

  const handleSetdetails = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await axios.post("https://devs-port-backend.onrender.com/api/auth/setDetails", {
        github,
        linkedin,
        leetCode,
        stackOverflow,
        hackerrank,
        instagram,
        facebook,
        about,
        userID,
        username,
      });
      router.push("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="loader_1 m-auto">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar9"></div>
          <div className="bar10"></div>
          <div className="bar11"></div>
          <div className="bar12"></div>
        </div>
      )}
      <div className="bg-black gap-5 flex flex-col md:flex-row justify-center items-center">
        <div className="m-5 md:w-[50%]">
          <div>
            <h1 className="md:text-[45px] text-[35px] text-left font-semibold text-white mb-3">
              Welcome {username || "User"} !<br />
              Provide Your Details to Continue...🚀
            </h1>
            <p className="text-[25px] text-gray-400 text-left">
              Access all your online identities in one place!
            </p>
            <div className="md:mt-10 mt-5">
              <p className="md:text-[25px] text-[20px] text-gray-400 text-left">
                You are just one step away from accessing all your online
                identities in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="md:m-5 mb-10 md:pb-5">
          <form onSubmit={handleSetdetails} className="form">
            <span className="signup">Provide Details</span>
            <input
              type="text"
              placeholder="GitHub Username"
              className="form--input"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
            <input
              type="url"
              placeholder="LinkedIn Profile Link"
              className="form--input"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <input
              type="url"
              placeholder="StackOverflow Profile Link"
              className="form--input"
              value={stackOverflow}
              onChange={(e) => setStackOverflow(e.target.value)}
            />
            <input
              type="text"
              placeholder="LeetCode Username"
              className="form--input"
              value={leetCode}
              onChange={(e) => setLeetCode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Hackerrank Username"
              className="form--input"
              value={hackerrank}
              onChange={(e) => setHackerrank(e.target.value)}
            />
            <input
              type="text"
              placeholder="Instagram Username"
              className="form--input"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            <input
              type="url"
              placeholder="Facebook Profile Link"
              className="form--input"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            <input
              type="text"
              placeholder="About Yourself"
              className="form--input"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <button type="submit" className="form--submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SetDetails;
