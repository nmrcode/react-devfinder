import styled from "styled-components";
import { motion } from "framer-motion";

export const SCardWrapper = styled(motion.article)`
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

  @media (${({ theme }) => theme.maxMedia.md}) {
    grid-template-areas:
      "avatar"
      "info"
      "descr"
      "stat"
      "links";
    grid-template-columns: 1fr;

    padding: 20px 15px;
  }
`;

export const SAvatarWrapper = styled.div`
  grid-area: avatar;

  margin: 0 auto;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

  @media (${({ theme }) => theme.maxMedia.md}) {
    margin-bottom: 20px;
  }
`;

export const SAvatar = styled.img`
  object-fit: cover;
`;

export const SInfoWrapper = styled.div`
  grid-area: info;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (${({ theme }) => theme.maxMedia.md}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

export const SNames = styled.div`
  margin-right: 10px;

  h3 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 5px;

    @media (${({ theme }) => theme.maxMedia.md}) {
      font-size: 24px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SJoined = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.5;
  white-space: nowrap;
  @media (${({ theme }) => theme.maxMedia.md}) {
    display: block;
    text-align: center;
    margin-top: 10px;
  }
`;

export const SDescrWrapper = styled.div`
  grid-area: descr;
  margin-bottom: 25px;

  @media (${({ theme }) => theme.maxMedia.md}) {
    font-size: 14px;
  }
`;

export const SStatWrapper = styled.div`
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

  @media (${({ theme }) => theme.maxMedia.md}) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;

export const SLinksWrapper = styled.div`
  grid-area: links;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 25px;
  column-gap: 10px;
  justify-content: space-between;

  @media (${({ theme }) => theme.maxMedia.md}) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;

export const SLinkItem = styled.a`
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 16px;

  svg {
    font-size: 24px;
    margin-right: 20px;
  }

  @media (${({ theme }) => theme.maxMedia.md}) {
    font-size: 14px;
  }
`;

export const SStatItem = styled.div`
  div {
    font-size: 16px;
  }

  p {
    font-weight: 700;
    font-size: 26px;
  }
`;
