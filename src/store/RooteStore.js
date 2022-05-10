import { ProfileStore } from "./ProfileStore";

export class RootStore {
  constructor() {
    this.profileStore = new ProfileStore(this);
  }
}
