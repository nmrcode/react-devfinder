import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { FiTwitter } from "react-icons/fi";
import { observer } from "mobx-react";
import { useRootStore } from "../../providers/RootStoreProvider";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

const SCardWrapper = styled(motion.article)`
  display: grid;
  grid-template-areas:
    "avatar info"
    "avatar descr"
    "avatar stat"
    "avatar links";
  grid-template-columns: 300px 1fr;

  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${({ theme }) => theme.shape.radii};
  padding: 50px 30px;
`;

export const SAvatarWrapper = styled.div`
  grid-area: avatar;

  margin: 0 auto;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
`;

const SAvatar = styled.img`
  object-fit: cover;
`;

const SInfoWrapper = styled.div`
  grid-area: info;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const SNames = styled.div`
  margin-right: 10px;

  h3 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SJoined = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.5;
  white-space: nowrap;
`;

const SDescrWrapper = styled.div`
  grid-area: descr;
  margin-bottom: 25px;
`;

const SStatWrapper = styled.div`
  grid-area: stat;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;

  text-align: center;

  background-color: ${({ theme }) => theme.colors.bgDark};
  border-radius: ${({ theme }) => theme.shape.radii};

  padding: 15px 20px;
  margin-bottom: 15px;
`;

const SStatItem = styled.div`
  div {
    font-size: 16px;
  }

  p {
    font-weight: 700;
    font-size: 26px;
  }
`;

const SLinksWrapper = styled.div`
  grid-area: links;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 25px;
  column-gap: 10px;
  justify-content: space-between;
`;

const SLinkItem = styled.a`
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 16px;

  svg {
    font-size: 24px;
    margin-right: 20px;
  }
`;

const StatItem = ({ text, count }) => (
  <SStatItem>
    <div>{text}</div>
    <p>{count}</p>
  </SStatItem>
);

const ProfileCard = observer(() => {
  const { profileStore } = useRootStore();
  const {
    avatar_url,
    followers,
    following,
    login,
    name,
    html_url,
    location,
    twitter_username,
    bio,
    email,
    created_at,
  } = profileStore.profile[0];

  return (
    <SCardWrapper
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
    >
      <SAvatarWrapper>
        <SAvatar src={avatar_url} />
      </SAvatarWrapper>
      <SInfoWrapper>
        <SNames>
          <h3>{name}</h3>
          <a href={html_url} target={"_blank"}>
            @{login}
          </a>
        </SNames>
        <SJoined>
          <div>Дата регистрации</div>
          {new Date(created_at).toLocaleDateString()}
        </SJoined>
      </SInfoWrapper>
      <SDescrWrapper>
        {bio ? bio : "У этого профиля нет описания "}
      </SDescrWrapper>
      <SStatWrapper>
        <StatItem text={"Repos"} count={"8"} />
        <StatItem text={"Followers"} count={followers} />
        <StatItem text={"Following"} count={following} />
      </SStatWrapper>
      <SLinksWrapper>
        {location ? (
          <SLinkItem>
            <GoLocation />
            <span>{location}</span>
          </SLinkItem>
        ) : null}
        {twitter_username ? (
          <SLinkItem>
            <FiTwitter />
            <span>{twitter_username}</span>
          </SLinkItem>
        ) : null}
        {email ? (
          <SLinkItem>
            <AiOutlineMail />
            <span>{email}</span>
          </SLinkItem>
        ) : null}
      </SLinksWrapper>
    </SCardWrapper>
  );
});

export default ProfileCard;
