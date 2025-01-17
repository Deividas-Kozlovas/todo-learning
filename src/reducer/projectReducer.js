export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECT_LOADING":
      return { ...state, loading: action.payload };
    case "SET_PROJECT_ERROR":
      return { ...state, error: action.payload };
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload.projects],
      };
    default:
      return state;
  }
};
