// A custom store without using Pinia
import { reactive } from "vue";
import VueCookies from "vue-cookies";

// Note: This axios is not that used by the main app
import axios from "axios";

// IDEA: have a tokenOptions in state with location and key
// IDEA 2: have a config file with tose settings
// IDEA 2 is bad because token location can be set by user
const jwtKey = "jwt";

export const state = reactive<any>({
  // Could have default options here
  options: {},
  user: null,

  // This would be more of an AuthWall thing
  // But actually used here
  authenticating: false,
});

export const actions = {
  async getUser() {
    // Note: token could be passed as parameter
    try {
      state.authenticating = true;

      // TODO: Look for token in LocalStorage if needed too
      // @ts-ignore
      const jwt = VueCookies.get(jwtKey);

      const { identification_url } = state.options;
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      const { data } = await axios.get(identification_url);

      state.user = data;
    } catch (error) {
      console.error(error);
      state.user = null;
      delete axios.defaults.headers.common["Authorization"];
    } finally {
      state.authenticating = false;
    }
  },

  async logout() {
    // @ts-ignore
    VueCookies.remove(jwtKey);
    actions.getUser();
  },
};
