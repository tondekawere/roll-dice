import React from "react";
import { Grid } from "@mui/material";
import { ProfileCard, ProfileCardFour, ProfileCardThree, ProfileCardTwo } from "./ProfileCard";

const Profile = () => {
  const cardData = [
    {
      image: "/profile.png",
      name: "Laura Smith",
      position: "Frontend Developer",
      website: "laurasmith.website",
      about:
        "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
      interests:
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ];
  const cardDataTwo = [
    {
      image: "/profile.png",
      name: "Laura Smith",
      position: "Frontend Developer",
      website: "laurasmith.website",
      about:
        "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
      interests:
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ];
  const cardDataThree = [
    {
      image: "/profile.png",
      name: "Laura Smith",
      position: "Frontend Developer",
      website: "laurasmith.website",
      about:
        "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
      interests:
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ];
  const cardDataFour = [
    {
      image: "/profile.png",
      name: "Laura Smith",
      position: "Frontend Developer",
      website: "laurasmith.website",
      about:
        "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
      interests:
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((data, index) => (
        <Grid
          xs={12}
          sm={5}
          md={5}
          mt={7}
          sx={{
            background: "#23252c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 0",
            ml: { xs: 2, sm: 5, md: 7, lg: 9 },
          }}
        >
          <Grid item key={index}>
            <ProfileCard {...data} />
          </Grid>
        </Grid>
      ))}
      {cardDataTwo.map((data, index) => (
        <Grid
          xs={12}
          sm={5}
          md={5}
          // ml={7}
          mt={7}
          sx={{
            background: "#23252c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 0",
            ml: { xs: 2, sm: 2, md: 7, lg: 7 },
          }}
        >
          <Grid item key={index}>
            <ProfileCardTwo {...data} />
          </Grid>
        </Grid>
      ))}
      {cardDataThree.map((data, index) => (
        <Grid
          xs={12}
          sm={5}
          md={5}
          mt={7}
          sx={{
            background: "#23252c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 0",
            ml: { xs: 2, sm: 5, md: 7, lg: 9 },
          }}
        >
          <Grid item key={index}>
            <ProfileCardThree {...data} />
          </Grid>
        </Grid>
      ))}
      {cardDataFour.map((data, index) => (
        <Grid
          xs={12}
          sm={5}
          md={5}
          // ml={7}
          mt={7}
          sx={{
            background: "#23252c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 0",
            ml: { xs: 2, sm: 2, md: 7, lg: 7 },
          }}
        >
          <Grid item key={index}>
            <ProfileCardFour {...data} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Profile;
