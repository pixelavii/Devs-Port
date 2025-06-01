import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Name from "./UIDesign/Name";
import UsersAbout from "./UIDesign/UsersAbout";
import { useState, useEffect } from "react";
import axios from "axios";
import UsersGithub from "./UIDesign/UsersGithub";
import UsersLinkedin from "./UIDesign/UsersLinkedin";
import UsersStackOverflow from "./UIDesign/UsersStackOverflow";
import UsersInstagram from "./UIDesign/UsersInstagram";
import UsersLeetcode from "./UIDesign/UsersLeetcode";
import UsersSkills from "./UIDesign/UsersSkills";
import { Button } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
const userID =
  typeof window !== "undefined" ? localStorage.getItem("userID") : null;
const user =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;

const Main1 = () => {
  const [linkedinDetails, setLinkedinDetails] = useState({});
  const [databaseData, setDatabaseData] = useState({});
  const [githubData, setGithubData] = useState({});
  const [stackoverflowData, setStackoverflowData] = useState({});
  const [instagramData, setInstagramData] = useState({});
  const [leetcodeData, setLeetcodeData] = useState({});
  const [LinkedinSkills, setLinkedinSkills] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [socialData, setSocialData] = useState({});
  const [LinkedinRes, setLinkedinRes] = useState([]);


  let combinedData = {
    LinkedIn: "",
    Github: "",
    StackOverflow: "",
    Instagram: "",
    LeetCode: "",
    UserData: "",
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.post("https://devs-port-backend.onrender.com/api/auth/getDetails", { userID });
      const mydata = res.data.filterData;
      const social = res.data.SocialFilter;
      

      if (Array.isArray(social) && social.length > 0) {
        setSocialData(social[0]);
      } else {
        console.error("SocialFilter is not available or is empty.");
        setSocialData({}); // or handle it as needed
      }

      if (Array.isArray(mydata) && mydata.length > 0) {
        setDatabaseData(mydata[0]);
      } else {
        console.error("filterData is not available or is empty.");
        setDatabaseData({}); // or handle it as needed
      }

      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 12000);

      if (social && Object.keys(social).length > 0) {
        console.log("Fetching existing user from database");
        console.log("To check if user exist", social);
      } else {
        const linkedinData = mydata[0].linkedin;
        const linkRes = await getUserDetails(linkedinData);
        setLinkedinDetails(linkRes);

        const gitData = mydata[0].github;
        const gitres = await getGithubDetails(gitData);
        setGithubData(gitres);
        const stackoverflowData = mydata[0].stackOverflow;
        const stackres = await getStackOverflowDetails(stackoverflowData);
        setStackoverflowData(stackres);
        const instagramData = mydata[0].instagram;
        const instagramres = await getInstagram(instagramData);
        setInstagramData(instagramres);
        const leetcodeData = mydata[0].leetCode;
        const leetcoderes = await getLeetcode(leetcodeData);
        setLeetcodeData(leetcoderes);

        combinedData.LinkedIn = linkRes;
        combinedData.Github = gitres;
        combinedData.StackOverflow = stackres;
        combinedData.Instagram = instagramres;
        combinedData.LeetCode = leetcoderes;
        combinedData.UserData = mydata;
        console.log("Response from database for data to be saved", linkRes);

        try {
          // console.log(
          //   "API call to save these data to the database",
          //   combinedData
          // );
          const SocialRes = await axios.post("https://devs-port-backend.onrender.com/api/auth/registerData", {
            combinedData,
          });
          console.log("Response from database for data to be saved", linkRes);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getLeetcode = async (leetcodeData) => {
    try {
      const MyLeetcodeData = await axios.post("https://devs-port-backend.onrender.com/api/getLeetcode", {
        leetcodeData,
      });
      const leetcode = MyLeetcodeData.data.profile;
      return leetcode;
    } catch (err) {
      console.log(err);
    }
  };

  const getInstagram = async (instagramData) => {
    try {
      const MyInstagramData = await axios.post("https://devs-port-backend.onrender.com/api/getInstagram", {
        instagramData,
      });
      const insta = MyInstagramData.data.profileData;
      return insta;
    } catch (err) {
      console.log(err);
    }
  };

  const getStackOverflowDetails = async (stackoverflowData) => {
    try {
      const MyStackoverflowData = await axios.post("https://devs-port-backend.onrender.com/api/getStackOverflow", {
        stackoverflowData,
      });
      const stack = MyStackoverflowData.data.profile;
      return stack;
    } catch (err) {
      console.log(err);
    }
  };

  const getGithubDetails = async (gitData) => {
    try {
      const MyGithubData = await axios.post("https://devs-port-backend.onrender.com/api/getGithub", { gitData });
      const git = MyGithubData.data.profile;
      return git;
    } catch (err) {
      console.log(err);
    }
  };

  const getUserDetails = async (linkedinData) => {
    try {
      const MyLinkedinData = await axios.post("https://devs-port-backend.onrender.com/api/getLinkedinName", {
        linkedinData,
      });
      setLinkedinSkills(MyLinkedinData.data.LinkedinSkill);
      const pelu = [
        MyLinkedinData.data.profile,
        MyLinkedinData.data.LinkedinSkill,
      ];
      return pelu;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mt-5 md:mt-8">
        <h2 className="text-white text-xl md:text-[30px]">
          {user}'s Dashboard
        </h2>
      </div>
      {/* For Desktop View */}

      {leetcodeData ||
      (socialData && Object.keys(leetcodeData || socialData).length > 0) ? (
        <div className="hidden md:block">
          <div className="mt-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid size={{ xs: 6, md: 5 }}>
                  <Item>
                    {linkedinDetails ||
                    (socialData &&
                      Object.keys(linkedinDetails || socialData).length >
                        0) ? (
                      <Name
                        data={linkedinDetails[0]}
                        AboutFromDatabase={databaseData}
                        UsersLinkedinNameDatabase={socialData}
                      />
                    ) : (
                      <Name />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 7 }}>
                  <Item>
                    {linkedinDetails ||
                    (socialData &&
                      Object.keys(linkedinDetails || socialData).length > 0) ? (
                      <UsersAbout
                        aboutData={linkedinDetails[0]}
                        UsersLinkedinAboutDatabase={socialData}
                      />
                    ) : (
                      <UsersAbout />
                    )}
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="mt-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid size={{ xs: 6, md: 7 }}>
                  <Item>
                    {LinkedinSkills ||
                    (socialData &&
                      Object.keys(LinkedinSkills || socialData).length > 0) ? (
                      <UsersSkills
                        userskill={LinkedinSkills}
                        UsersLinkedinSkillsDatabase={socialData}
                      />
                    ) : (
                      <UsersSkills />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 5 }}>
                  <Item>
                    {linkedinDetails ||
                    (socialData &&
                      Object.keys(linkedinDetails || socialData).length > 0) ? (
                      <UsersLinkedin
                        UserLinkedinDatabase={socialData}
                        UsersLinkedinData={linkedinDetails[0]}
                      />
                    ) : (
                      <UsersLinkedin />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Item>
                    {stackoverflowData ||
                    (socialData &&
                      Object.keys(stackoverflowData || socialData).length >
                        0) ? (
                      <UsersStackOverflow
                        UsersStackOverflowDatabase={socialData}
                        StackData={stackoverflowData}
                      />
                    ) : (
                      <UsersStackOverflow />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Item>
                    {leetcodeData ||
                    (socialData &&
                      Object.keys(leetcodeData || socialData).length > 0) ? (
                      <UsersLeetcode
                        UsersLeetcodeDatabase={socialData}
                        LeetcodeData={leetcodeData}
                      />
                    ) : (
                      <UsersLeetcode />
                    )}
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="mt-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid size={{ xs: 6, md: 7 }}>
                  <Item>
                    {githubData ||
                    (socialData &&
                      Object.keys(githubData || socialData).length > 0) ? (
                      <UsersGithub
                        UsersGithubDatabase={socialData}
                        UserGithubData={githubData}
                      />
                    ) : (
                      <UsersGithub />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 5 }}>
                  <Item>
                    {instagramData ||
                    (socialData &&
                      Object.keys(instagramData || socialData).length > 0) ? (
                      <UsersInstagram
                        UsersInstagramDatabase={socialData}
                        instaData={instagramData}
                      />
                    ) : (
                      <UsersInstagram />
                    )}
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="m-14">
            <div className="flex text-center justify-center items-center">
              <Link href={"/users"}>
                <Button variant="contained" color="primary" className="mt-5">
                  Generate Link
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-lg md:flex hidden flex-col justify-center h-screen items-center relative bg-black rounded-sm shadow-2xl shadow-gray-900">
          <div className="🤚">
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="🌴"></div>
            <div className="👍"></div>
          </div>

          <div className="card mt-8">
            <div className="loader flex gap-2">
              <p>Loading Your...</p>
              <div className="words">
                <span class="word">GitHub</span>
                <span className="word">LinkedIn</span>
                <span className="word">LeetCode</span>
                <span className="word">StackOverflow</span>
                <span className="word">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* For Desktop View */}

      {/* For Mobile View */}

      {leetcodeData ||
      (socialData && Object.keys(leetcodeData || socialData).length > 0) ? (
        <div className="md:hidden block">
          <div className="mt-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 11, md: 5 }}>
                  <Item>
                    {linkedinDetails ||
                    (socialData &&
                      Object.keys(linkedinDetails || socialData).length >
                        0) ? (
                      <Name
                        data={linkedinDetails[0]}
                        AboutFromDatabase={databaseData}
                        UsersLinkedinNameDatabase={socialData}
                      />
                    ) : (
                      <Name />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 11, md: 7 }}>
                  <Item>
                    {linkedinDetails ||
                    (socialData &&
                      Object.keys(linkedinDetails || socialData).length > 0) ? (
                      <UsersAbout
                        aboutData={linkedinDetails[0]}
                        UsersLinkedinAboutDatabase={socialData}
                      />
                    ) : (
                      <UsersAbout />
                    )}
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="mt-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 11, md: 7 }}>
                  <Item>
                    {LinkedinSkills ||
                    (socialData &&
                      Object.keys(LinkedinSkills || socialData).length > 0) ? (
                      <UsersSkills
                        userskill={LinkedinSkills}
                        UsersLinkedinSkillsDatabase={socialData}
                      />
                    ) : (
                      <UsersSkills />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 11, md: 5 }}>
                  <Item>
                    {linkedinDetails ||
                    (socialData &&
                      Object.keys(linkedinDetails || socialData).length > 0) ? (
                      <UsersLinkedin
                        UserLinkedinDatabase={socialData}
                        UsersLinkedinData={linkedinDetails[0]}
                      />
                    ) : (
                      <UsersLinkedin />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 11, md: 4 }}>
                  <Item>
                    {stackoverflowData ||
                    (socialData &&
                      Object.keys(stackoverflowData || socialData).length >
                        0) ? (
                      <UsersStackOverflow
                        UsersStackOverflowDatabase={socialData}
                        StackData={stackoverflowData}
                      />
                    ) : (
                      <UsersStackOverflow />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 11, md: 8 }}>
                  <Item>
                    {leetcodeData ||
                    (socialData &&
                      Object.keys(leetcodeData || socialData).length > 0) ? (
                      <UsersLeetcode
                        UsersLeetcodeDatabase={socialData}
                        LeetcodeData={leetcodeData}
                      />
                    ) : (
                      <UsersLeetcode />
                    )}
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="mt-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 11, md: 7 }}>
                  <Item>
                    {githubData ||
                    (socialData &&
                      Object.keys(githubData || socialData).length > 0) ? (
                      <UsersGithub
                        UsersGithubDatabase={socialData}
                        UserGithubData={githubData}
                      />
                    ) : (
                      <UsersGithub />
                    )}
                  </Item>
                </Grid>
                <Grid size={{ xs: 11, md: 5 }}>
                  <Item>
                    {instagramData ||
                    (socialData &&
                      Object.keys(instagramData || socialData).length > 0) ? (
                      <UsersInstagram
                        UsersInstagramDatabase={socialData}
                        instaData={instagramData}
                      />
                    ) : (
                      <UsersInstagram />
                    )}
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      ) : (
        <div className="text-white text-lg flex md:hidden flex-col justify-center h-[85vh] items-center relative bg-black rounded-sm shadow-2xl shadow-gray-900">
          <div className="🤚">
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="🌴"></div>
            <div className="👍"></div>
          </div>

          <div className="card mt-5">
            <div className="loader flex">
              <p className="text-sm">Loading Your...</p>
              <div className="words">
                <span className="text-sm word">GitHub</span>
                <span className="text-sm word">LinkedIn</span>
                <span className="text-sm word">LeetCode</span>
                <span className="text-sm word">StackOverflow</span>
                <span className="text-sm word">Instagram</span>
              </div>
            </div>
          </div>

          <div className="flex text-center justify-center items-center">
            <div>
              <p className="text-[18px]">
                {user}, while your data is loading...
              </p>
              <p className="text-gray-300 text-[15px]">Do you know ?</p>
              <div className="mt-5">
                <p className="text-gray-200 text-left">
                  👉Why do programmers always prefer dark mode?
                </p>
                {showMessage ? (
                  <p className="text-gray-100 text-left mt-2">
                    Because light attracts bugs!
                  </p>
                ) : (
                  <p className="text-gray-100 text-left mt-2">Socho Socho...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* For Mobile View */}
    </>
  );
};

export default Main1;
