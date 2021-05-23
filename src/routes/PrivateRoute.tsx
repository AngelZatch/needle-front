import { Redirect, Route, RouteProps } from 'react-router';
import Cookies from 'universal-cookie';

const PrivateRoute: React.FC<{ children: any } & RouteProps> = ({
  children,
  ...rest
}) => {
  const cookies = new Cookies();

  const hasFastAccess = cookies.get('isAuth');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        hasFastAccess !== null ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
