import React from "react";
import SearchForm from "../search-form/SearchForm";
import ProfileCard from "../profile-card/ProfileCard";
import { observer } from "mobx-react";
import { useRootStore } from "../../providers/RootStoreProvider";
import { motion } from "framer-motion";

const MainPage = observer(() => {
  const { profileStore } = useRootStore();
  return (
    <>
      <SearchForm />
      {profileStore.profile.length ? <ProfileCard /> : null}
      {profileStore.state === "error" ? (
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          style={{ textAlign: "center" }}
        >
          {profileStore.errorMsg}
        </motion.p>
      ) : null}
    </>
  );
});

export default MainPage;
