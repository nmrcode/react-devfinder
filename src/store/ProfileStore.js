import { action, computed, makeObservable, observable } from "mobx";
import axios from "axios";
import { API_BASE_URL } from "../api/config";

export class ProfileStore {
  rootStore;
  profile = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      profile: observable,
      searchProfileByName: action,
      getCurrentProfile: computed,
    });
  }

  searchProfileByName = async (name) => {
    this.profile = [];
    await axios.get(`${API_BASE_URL}users/${name}`).then(({ data }) => {
      this.profile.push(data);
    });
  };

  get getCurrentProfile() {
    return this.profile[0];
  }
}
