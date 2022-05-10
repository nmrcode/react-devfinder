import { makeObservable, observable } from "mobx";

export class ProfileStore {
  rootStore;
  profile = 1;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      profile: observable,
    });
  }
}
