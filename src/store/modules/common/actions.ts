export default {
  setActiveQuestions: ({ commit }, activeQuestions) => {
    commit("SET_ACTIVE_QUESTIONS", activeQuestions);
  },

  setQuestions: ({ commit }, questions) => {
    commit("SET_QUESTIONS", questions);
  },

  // Сбросить все значения модуля авторизации
  reset: ({ commit }) => {
    commit("RESET");
  },
};
