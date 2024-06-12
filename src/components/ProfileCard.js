import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { EmailIcon, LinkedInIcon } from "./Icons";

const StyledCard = styled(Card)({
  maxWidth: 317,
  marginBottom: "20px",
  borderRadius: "10px",
});

const CardHeader = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CardImage = styled(CardMedia)({
  height: 300,
  
  margin:"0"
});

const CardButtons = styled(CardContent)({
  display: "flex",
  justifyContent: "space-around",
  padding: "3% 11% 0 11%",
  fontSize:"13px"
});

const CardContentWrapper = styled(CardContent)({
  padding:"5% 12.5%",
  paddingBottom: "0",
});

const CardHeading = styled(Typography)({
  fontWeight: "bold",
  marginTop: "20px",
  fontSize:"16px"
});

const CardText = styled(Typography)({
  marginBottom: "20px",
  fontSize:"10.24px"
});

const IconWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  gap:"5%",
  marginTop: "40px",
  padding:"5% 0",
  background:"#000",
});

const IconLink = styled(Link)({
  color: "#918E9B",
});


export const ProfileCard = ({ image, name, position, website,email, about, interests }) => {
  return (
    <StyledCard sx={{ background: "#1A1B21", color: "#fff" }}>
      <CardImage component="img" height="240" image={image} alt={name} />
      <CardHeader>
        <Typography variant="h5">{name}</Typography>
        <Typography
          variant="subtitle1"
          color="#F3BF99"
          style={{ fontSize: "12.8px" }}
        >
          {position}
        </Typography>
        <Link
          href={website}
          target="_blank"
          underline="none"
          color={"#fff"}
          style={{ fontSize: "10.24px" }}
          rel="noopener"
        >
          {website}
        </Link>
      </CardHeader>
      <CardButtons>
        <Button
          variant="contained"
          href="mailto:email@gmail.com"
          startIcon={<EmailIcon />}
          style={{
            background: "#fff",
            color: "#000",
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          Email
        </Button>
        <Button
          variant="contained"
          href="https://www.linkedin.com/in/yourprofile"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
      </CardButtons>
      <CardContentWrapper>
        <CardHeading>About</CardHeading>
        <CardText>{about}</CardText>
        <CardHeading>Interests</CardHeading>
        <CardText>{interests}</CardText>
      </CardContentWrapper>
      <IconWrapper>
        <IconLink href="https://twitter.com">
          <TwitterIcon />
        </IconLink>
        <IconLink href="https://facebook.com">
          <FacebookIcon />
        </IconLink>
        <IconLink href="https://instagram.com">
          <InstagramIcon />
        </IconLink>
        <IconLink href="https://github.com">
          <GitHubIcon />
        </IconLink>
      </IconWrapper>
    </StyledCard>
  );
};

export const ProfileCardTwo = ({
  image,
  name,
  position,
  website,
  about,
  interests,
}) => {
  return (
    <StyledCard sx={{ background: "#1A1B21", color: "#fff" }}>
      <CardImage component="img" height="240" image={image} alt={name} />
      <CardHeader>
        <Typography variant="h5">{name}</Typography>
        <Typography
          variant="subtitle1"
          color="#F3BF99"
          style={{ fontSize: "12.8px" }}
        >
          {position}
        </Typography>
        <Link
          href={website}
          target="_blank"
          underline="none"
          color={"#fff"}
          style={{ fontSize: "10.24px" }}
          rel="noopener"
        >
          {website}
        </Link>
      </CardHeader>
      <CardButtons>
        <Button
          variant="contained"
          href="mailto:email@gmail.com"
          fullWidth
          startIcon={<EmailIcon />}
          style={{
            background: "#fff",
            color: "#000",
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          Email
        </Button>
      </CardButtons>
      <CardContentWrapper>
        <CardHeading>About</CardHeading>
        <CardText>{about}</CardText>
        <CardHeading>Interests</CardHeading>
        <CardText>{interests}</CardText>
      </CardContentWrapper>
      <IconWrapper>
        <IconLink href="https://twitter.com">
          <TwitterIcon />
        </IconLink>
        <IconLink href="https://facebook.com">
          <FacebookIcon />
        </IconLink>
        <IconLink href="https://instagram.com">
          <InstagramIcon />
        </IconLink>
        <IconLink href="https://linkedin.com">
          <LinkedInIcon />
        </IconLink>
        <IconLink href="https://github.com">
          <GitHubIcon />
        </IconLink>
      </IconWrapper>
    </StyledCard>
  );
};
export const ProfileCardThree = ({ image, name, position, website,email, about, interests }) => {
  return (
    <StyledCard sx={{ background: "#F5F5F5", color: "#4A4E74" }}>
      <CardImage component="img" height="240" image={image} alt={name} />
      <CardHeader>
        <Typography variant="h5">{name}</Typography>
        <Typography
          variant="subtitle1"
          color="#F3BF99"
          style={{ fontSize: "12.8px" }}
        >
          {position}
        </Typography>
        <Link
          href={website}
          target="_blank"
          underline="none"
          color={"#4A4E74"}
          style={{ fontSize: "10.24px" }}
          rel="noopener"
        >
          {website}
        </Link>
      </CardHeader>
      <CardButtons>
        <Button
          variant="contained"
          href="mailto:email@gmail.com"
          startIcon={<EmailIcon />}
          style={{
            background: "#fff",
            color: "#000",
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          Email
        </Button>
        <Button
          variant="contained"
          href="https://www.linkedin.com/in/yourprofile"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
      </CardButtons>
      <CardContentWrapper>
        <CardHeading>About</CardHeading>
        <CardText>{about}</CardText>
        <CardHeading>Interests</CardHeading>
        <CardText>{interests}</CardText>
      </CardContentWrapper>
      <IconWrapper style={{ background: "#D5D4D8" }}>
        <IconLink href="https://twitter.com">
          <TwitterIcon />
        </IconLink>
        <IconLink href="https://facebook.com">
          <FacebookIcon />
        </IconLink>
        <IconLink href="https://instagram.com">
          <InstagramIcon />
        </IconLink>
        <IconLink href="https://github.com">
          <GitHubIcon />
        </IconLink>
      </IconWrapper>
    </StyledCard>
  );
};

export const ProfileCardFour = ({
  image,
  name,
  position,
  website,
  about,
  interests,
}) => {
  return (
    <StyledCard sx={{ background: "#F5F5F5", color: "#4A4E74" }}>
      <CardImage component="img" height="240" image={image} alt={name} />
      <CardHeader>
        <Typography variant="h5">{name}</Typography>
        <Typography
          variant="subtitle1"
          color="#F3BF99"
          style={{ fontSize: "12.8px" }}
        >
          {position}
        </Typography>
        <Link
          href={website}
          target="_blank"
          underline="none"
          color={"#4A4E74"}
          style={{ fontSize: "10.24px" }}
          rel="noopener"
        >
          {website}
        </Link>
      </CardHeader>
      <CardButtons>
        <Button
          variant="contained"
          href="mailto:email@gmail.com"
          fullWidth
          startIcon={<EmailIcon />}
          style={{
            background: "#fff",
            color: "#000",
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          Email
        </Button>
      </CardButtons>
      <CardContentWrapper>
        <CardHeading>About</CardHeading>
        <CardText>{about}</CardText>
        <CardHeading>Interests</CardHeading>
        <CardText>{interests}</CardText>
      </CardContentWrapper>
      <IconWrapper style={{ background: "#D5D4D8" }}>
        <IconLink href="https://twitter.com">
          <TwitterIcon />
        </IconLink>
        <IconLink href="https://facebook.com">
          <FacebookIcon />
        </IconLink>
        <IconLink href="https://instagram.com">
          <InstagramIcon />
        </IconLink>
        <IconLink href="https://linkedin.com">
          <LinkedInIcon />
        </IconLink>
        <IconLink href="https://github.com">
          <GitHubIcon />
        </IconLink>
      </IconWrapper>
    </StyledCard>
  );
};


