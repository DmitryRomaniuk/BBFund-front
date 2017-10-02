// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import LoginPage from './component/page/login';
import AdminComponent from './component/page/admin';
import ProtectedComponent from './component/page/protected';
import HomePage from './component/page/home';
// import Footer from './component/footer';
import Nav from './component/nav';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from './config';
import * as routes from './routes';

class App extends Component {
    static defaultProps: Object;

    render() {
        return (<div className="container-fluid row" style={{ backgroundColor: '#003f58' }}>
          <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
          <Nav className="col-2" />
          <Switch className="col-10">
            <Route exact path={routes.HOME_PAGE_ROUTE} component={HomePage} />
            <Route path={routes.LOGIN_ROUTE} component={LoginPage} />
            <Route path={routes.PROTECTED_ROUTE} component={ProtectedComponent} />
            <Route path={routes.ADMIN_ROUTE} component={AdminComponent} />
            <Route component={NotFoundPage} />
          </Switch>
          {/* <Footer className='col-12'/> */}
        </div>);
    }
}


App.propTypes = {
  // eslint-disable-next-line react/require-default-props
};

const mapStateToProps = state => ({
    motolist: state.listHome.get('listRoutes').toJS(),
});

export default withRouter(connect(mapStateToProps)(App));
