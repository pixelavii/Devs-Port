import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Name from "@/components/UIDesign/Name";
import UsersAbout from "@/components/UIDesign/UsersAbout";
import UsersGithub from "@/components/UIDesign/UsersGithub";
import UsersLinkedin from "@/components/UIDesign/UsersLinkedin";
import UsersStackOverflow from "@/components/UIDesign/UsersStackOverflow";
import UsersInstagram from "@/components/UIDesign/UsersInstagram";
import UsersLeetcode from "@/components/UIDesign/UsersLeetcode";
import UsersSkills from "@/components/UIDesign/UsersSkills";

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

const UserID = () => {
  return (
      <>
        <div className="hidden md:block">
          <div className="p-5 bg-black">
            <div>
              <h1 className="text-3xl font-bold text-center text-white">
                Dev's Port
              </h1>
            </div>
          </div>
          <div className="pt-5">
            <p className="text-2xl font-bold text-center">User's Portfolio</p>
          </div>
          <div className="m-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid size={{ xs: 6, md: 5 }}>
                  <Item>
                    <Name />
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 7 }}>
                  <Item>
                    <UsersAbout />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="m-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid size={{ xs: 6, md: 7 }}>
                  <Item>
                    <UsersSkills />
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 5 }}>
                  <Item>
                    <UsersLinkedin />
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <div className="text-center">User's StackOverflow</div>
                  <Item>
                    <UsersStackOverflow />
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                  <div className="text-center">User's LeetCode</div>
                  <Item>
                    <UsersLeetcode />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className="m-5">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid size={{ xs: 6, md: 7 }}>
                  <div className="text-center">User's GitHub</div>
                  <Item>
                    <UsersGithub />
                  </Item>
                </Grid>
                <Grid size={{ xs: 6, md: 5 }}>
                  <div className="text-center">User's Instagram</div>
                  <Item>
                    <UsersInstagram />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </>
  );
};

export default UserID;
