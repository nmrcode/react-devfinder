import { ProfileStore } from "./ProfileStore";
import { ThemeStore } from "./ThemeStore";

export class RootStore {
  constructor() {
    this.profileStore = new ProfileStore(this);
    this.themeStore = new ThemeStore(this);
  }
}
