// A custom store without using Pinia
// TODO: use Pinia
import { reactive } from "vue";
import VueCookies from "vue-cookies";
import OidcAuth from "@moreillon/oidc-auth";

// Note: This axios is not that used by the main app
import axios from "axios";

// IDEA: have a tokenOptions in state with location and key
// IDEA 2: have a config file with those settings
// IDEA 2 is bad because token location can be set by user
const jwtKey = "jwt";

// TODO: typing
type State = {
  options: any;
  user: any;
  authenticating: boolean;
  oidcAuth?: OidcAuth;
};

export const state = reactive<State>({
  // Could have default options here
  options: {
    footer: true,
  },
  user: null,

  // This would be more of an AuthWall thing
  // But actually used here
  authenticating: false,

  oidcAuth: undefined,
});

const getUserLegacy = async () => {
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
};

const getUserOidc = async () => {
  state.authenticating = true;

  if (!state.options.oidc) throw Error("Missing OIDC configuration");

  state.oidcAuth = new OidcAuth(state.options.oidc);

  state.oidcAuth.init().then((user: any) => {
    if (!user) return;
    state.user = user;
  });

  state.oidcAuth.userManager.events.addUserLoaded((user: any) => {
    state.user = user;
  });
};

export const actions = {
  async getUser() {
    const { identification_url, oidc } = state.options;

    if (oidc?.authority && oidc?.client_id) {
      console.log("Getting user with OIDC");
      await getUserOidc();
    } else if (identification_url) {
      await getUserLegacy();
    } else {
      console.error(`No authentication strategy available`);
    }
  },

  async logout() {
    if (state.oidcAuth) {
      state.oidcAuth.userManager.signoutRedirect();
    } else {
      // @ts-ignore
      VueCookies.remove(jwtKey);
      actions.getUser();
    }
  },
};
