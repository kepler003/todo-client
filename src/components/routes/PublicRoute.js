
import React, {useContext, Fragment} from "react"
import { Route, Redirect } from "react-router-dom"

import AppContext from '../../contexts/AppContext';

function PublicRoute({ children, redirectPath, ...rest }) {

  const {context} = useContext(AppContext);

  return (
    <Fragment>
      {context.user.id ? (
        <Redirect to={redirectPath}/>
      ) : (
        <Route {...rest}>
          {children}
        </Route>
      )}
    </Fragment>
  );
}

export default PublicRoute;