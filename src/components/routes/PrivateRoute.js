
import React, {useContext, Fragment} from "react"
import { Route, Redirect } from "react-router-dom"

import AppContext from '../../contexts/AppContext';

function PrivateRoute({ children, redirectPath, ...rest }) {

  const {context} = useContext(AppContext);

  return (
    <Fragment>
      {context.user.id ? (
        <Route {...rest}>
          {children}
        </Route>
      ) : (
        <Redirect to={redirectPath}/>
      )}
    </Fragment>
  );
}

export default PrivateRoute;