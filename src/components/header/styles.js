import styled from "styled-components";

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
  padding: 10px 0;
  width: 100%;
`;

export const SLogo = styled.div`
  font-weight: 700;
  font-size: 24px;
  @media (${({ theme }) => theme.maxMedia.sm}) {
    font-size: 16px;
  }
`;
