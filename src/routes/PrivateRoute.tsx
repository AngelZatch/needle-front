import { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { AuthContext } from '../context/auth';

const PrivateRoute: React.FC<{ children: any } & RouteProps> = ({
  children,
  ...rest
}) => {
  const { hasUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        hasUser ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
