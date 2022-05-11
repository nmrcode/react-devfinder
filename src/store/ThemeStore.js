import { makeAutoObservable } from "mobx";

export class ThemeStore {
  rootStore;
  theme = "base";

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  switchTheme() {
    this.theme = this.theme === "base" ? "dark" : "base";
  }
}
