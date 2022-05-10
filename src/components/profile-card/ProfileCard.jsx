import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const SCardWrapper = styled.article`
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
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.5;
`;

const SDescrWrapper = styled.div`
  grid-area: descr;
  margin-bottom: 15px;
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
  gap: 10px;
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

const ProfileCard = () => {
  return (
    <SCardWrapper>
      <SAvatarWrapper>
        <SAvatar src={"http://placekitten.com/1000/1000"} />
      </SAvatarWrapper>
      <SInfoWrapper>
        <SNames>
          <h3>nmrspb</h3>
          <a href={"/"}>@nikmur</a>
        </SNames>
        <SJoined>Зарегистрирован с 25 янв 2019г</SJoined>
      </SInfoWrapper>
      <SDescrWrapper>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        aliquid assumenda beatae dolore, doloribus error, fugit id impedit
        inventore magnam magni minima minus neque non perspiciatis quae quasi
        quidem quo rem sed sit soluta, suscipit totam unde veritatis!
        Asperiores, aut est fuga libero maiores maxime quia reiciendis rerum
        vitae voluptatibus!
      </SDescrWrapper>
      <SStatWrapper>
        <StatItem text={"Repos"} count={"8"} />
        <StatItem text={"Followers"} count={"8"} />
        <StatItem text={"Following"} count={"8"} />
      </SStatWrapper>
      <SLinksWrapper>
        <SLinkItem>
          <GoLocation />
          <span>123</span>
        </SLinkItem>
        <SLinkItem>
          <AiOutlineLink />
          <span>123</span>
        </SLinkItem>
        <SLinkItem>
          <FiTwitter />
          <span>123</span>
        </SLinkItem>
      </SLinksWrapper>
    </SCardWrapper>
  );
};

export default ProfileCard;
