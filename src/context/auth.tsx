import { createContext, useCallback, useMemo, useReducer } from 'react';

const AuthContext = createContext<{
  hasUser: boolean;
  login: () => void;
  logout: () => void;
}>({
  hasUser: false,
  login: () => {},
  logout: () => {},
});

const authReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, hasUser: action.payload };
    case 'LOGOUT':
      return { ...state, hasUser: false };
    default:
      return state;
  }
};

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { hasUser: null });

  const login = useCallback(() => {
    dispatch({
      type: 'LOGIN',
      payload: { hasUser: true },
    });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT', payload: null });
  }, []);

  const value = useMemo(() => {
    return { hasUser: state.hasUser, login, logout };
  }, [state.hasUser, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
