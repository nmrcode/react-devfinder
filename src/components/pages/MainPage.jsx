import React, { useEffect } from "react";
import SearchForm from "../search-form/SearchForm";
import ProfileCard from "../profile-card/ProfileCard";
import { observer } from "mobx-react";
import { useRootStore } from "../../providers/RootStoreProvider";

const MainPage = observer(() => {
  const { profileStore } = useRootStore();
  return (
    <>
      <SearchForm />
      {profileStore.profile.length ? <ProfileCard /> : null}
    </>
  );
});

export default MainPage;
