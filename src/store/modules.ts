import commonState from "./modules/common/state";
import commonActions from "./modules/common/actions";
import commonMuations from "./modules/common/mutations";
import commonGetters from "./modules/common/getters";

export default {
  common: {
    namespaced: true,
    state: commonState,
    actions: commonActions,
    mutations: commonMuations,
    getters: commonGetters,
  },
};
