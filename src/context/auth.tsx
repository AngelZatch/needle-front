import { createContext, useCallback, useMemo, useReducer } from 'react';
import Cookies from 'universal-cookie';

export type AuthenticatedUser = { id: number; nickname: string };

const AuthContext = createContext<{
  user: AuthenticatedUser | null;
  login: (user: AuthenticatedUser) => void;
  logout: () => void;
}>({
  user: null,
  login: (user: AuthenticatedUser) => {},
  logout: () => {},
});

const authReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  const cookies = useMemo(() => {
    return new Cookies();
  }, []);

  const login = useCallback(
    (user: AuthenticatedUser) => {
      cookies.set('isAuth', '', { path: '/' });
      dispatch({
        type: 'LOGIN',
        payload: user,
      });
    },
    [cookies],
  );

  const logout = useCallback(() => {
    cookies.remove('isAuth');
    dispatch({ type: 'LOGOUT', payload: { user: null } });
  }, [cookies]);

  const value = useMemo(() => {
    return { user: state.user, login, logout };
  }, [state.user, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
