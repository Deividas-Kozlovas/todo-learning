import React, { useReducer } from "react";
import { reducer } from "../reducer/projectReducer";

import {
  CREATE_PROJECT,
  SET_PROJECT_ERROR,
  SET_PROJECT_LOADING,
} from "../actions/projectActions";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, displach] = useReducer(reducer, initialState);

  const createProject = (project) => {
    displach({ type: CREATE_PROJECT, payload: { project } });
  };

  const setProjectLoading = (loadging) => {
    displach({ type: SET_PROJECT_LOADING, payload: { loadging } });
  };

  const setProjectError = (error) => {
    displach({ type: SET_PROJECT_ERROR, payload: { error } });
  };

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        createProject,
        setProjectError,
        setProjectLoading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export { ProjectContext, ProjectProvider };
