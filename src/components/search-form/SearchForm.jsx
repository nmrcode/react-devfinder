import React, { useState } from "react";
import styled from "styled-components";
import Button from "../commons/button/Button";
import { BsSearch } from "react-icons/bs";
import { values } from "mobx";
import { observer } from "mobx-react";
import { useRootStore } from "../../providers/RootStoreProvider";

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

const SearchForm = observer(() => {
  const [searchValue, setSearchValue] = useState("");

  const { profileStore } = useRootStore();

  const handleOnChange = (text) => {
    setSearchValue(text);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    profileStore.searchProfileByName(searchValue);
    setSearchValue("");
  };

  return (
    <SFormWrapper onSubmit={(e) => handleOnSubmit(e)}>
      <BsSearch size={"30px"} />
      <SInput
        type={"text"}
        name={"username"}
        value={searchValue}
        onChange={(e) => handleOnChange(e.target.value)}
        placeholder={"Введите никнейм разработчика"}
      />
      <Button type={"submit"}>Найти</Button>
    </SFormWrapper>
  );
});

export default SearchForm;
