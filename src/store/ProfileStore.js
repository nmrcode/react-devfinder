import { action, computed, makeObservable, observable } from "mobx";
import axios from "axios";
import { API_BASE_URL } from "../api/config";

export class ProfileStore {
  rootStore;
  profile = [];
  state = "idle";
  errorMsg = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      profile: observable,
      state: observable,
      errorMsg: observable,
      searchProfileByName: action,
      getCurrentProfile: computed,
    });
  }

  searchProfileByName = async (name) => {
    this.profile = [];
    this.state = "loading";
    await axios
      .get(`${API_BASE_URL}users/${name}`)
      .then(({ data }) => {
        this.profile.push(data);
        this.state = "idle";
      })
      .catch(({ response }) => {
        this.state = "error";
        this.errorMsg = response.data.message;
      });
  };

  get getCurrentProfile() {
    return this.profile[0];
  }
}
