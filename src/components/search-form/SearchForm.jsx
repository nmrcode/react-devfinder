import React from "react";
import styled from "styled-components";
import Button from "../commons/button/Button";
import { BsSearch } from "react-icons/bs";

const SFormWrapper = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 10px 10px 10px 20px;
  border-radius: ${({ theme }) => theme.shape.radii};
  margin-bottom: 20px;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SInput = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: transparent;
  color: ${({ theme }) => theme.colors.main};
  font-size: 21px;
  line-height: 1;
  margin: 0 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SearchForm = () => {
  return (
    <SFormWrapper>
      <BsSearch size={"30px"} />
      <SInput
        type={"text"}
        name={"username"}
        placeholder={"Введите никнейм разработчика"}
      />
      <Button>Найти</Button>
    </SFormWrapper>
  );
};

export default SearchForm;
