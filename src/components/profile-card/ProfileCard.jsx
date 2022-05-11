import React from "react";
import { GoLocation } from "react-icons/go";
import { FiTwitter } from "react-icons/fi";
import { observer } from "mobx-react";
import { useRootStore } from "../../providers/RootStoreProvider";
import { AiOutlineMail } from "react-icons/ai";
import StatItem from "./StatItem";
import {
  SAvatar,
  SAvatarWrapper,
  SCardWrapper,
  SDescrWrapper,
  SInfoWrapper,
  SJoined,
  SLinkItem,
  SLinksWrapper,
  SNames,
  SStatWrapper,
} from "./styles";

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
          {name && <h3>{name}</h3>}
          <a href={html_url} target="_blank" rel={"noreferrer"}>
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
        {location && (
          <SLinkItem>
            <GoLocation />
            <span>{location}</span>
          </SLinkItem>
        )}
        {twitter_username && (
          <SLinkItem>
            <FiTwitter />
            <span>{twitter_username}</span>
          </SLinkItem>
        )}
        {email && (
          <SLinkItem>
            <AiOutlineMail />
            <span>{email}</span>
          </SLinkItem>
        )}
      </SLinksWrapper>
    </SCardWrapper>
  );
});

export default ProfileCard;
