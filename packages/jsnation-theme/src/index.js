import Root from "./theme-files";

export default {
  name: "jsnation-theme",
  roots: {
    theme: Root
  },
  state: {
   /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: true
      }
    }
  },
  actions: {
    theme: {}
  }
};
