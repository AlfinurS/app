import { TMP_STATE } from "@/store/modules/common/constants";

export default {
  SET_ACTIVE_QUESTIONS(state, activeQuestions) {
    state.activeQuestions = activeQuestions;
  },

  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },

  RESET(state) {
    const defaultState = Object.entries(TMP_STATE);
    defaultState.forEach((item) => {
      const key = item[0];
      const value = item[1];
      state[key] = value;
    });
  },
};
