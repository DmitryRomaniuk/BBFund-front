// @flow

import $ from 'jquery';
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import {
  HOME_PAGE_ROUTE,
  // PROTECTED_ROUTE,
  // ADMIN_ROUTE,
} from '../routes';
import { logout } from '../action/user';

// const getUserName = (user) => {
//     if (user.data) return `Welcome ${user.data.name}!`;
//     return 'Hello guest!';
// };
const handleNavLinkClick = () => {
    $('body').scrollTop(0);
    $('.js-navbar-collapse').collapse('hide');
};

// const UserName = ({ user, classComponent }: {user: Object, classComponent: string}) => (<div className={classComponent + ' nav-link brand-text'} >{getUserName(user)}</div>);
// const LoginLink = ({ user }: {user: ?Object}) => ((!user) ? <NavLink className="nav-link" to={LOGIN_ROUTE}>Login</NavLink> : null);
// const LogoutLink = ({ user, logoutUser }: { user: ?Object, logoutUser: Function }) => ((!user) ? null : <NavLink to="/" className="nav-link" onClick={logoutUser}>Logout</NavLink>);
// const ProtectedLink = ({ user, classComponent }: { user: Object, classComponent: string }) => ((user.data) ? (
//   <li className={classComponent}>
//     <NavLink to={PROTECTED_ROUTE} className="nav-link" onClick={handleNavLinkClick}>My cabinet</NavLink>
//   </li>
//     ) : null);

// const AdminLink = ({ user, classComponent }: {user: Object, classComponent: string}) => {
//     if (!user.data) return null;
//     return (user.data.isAdmin) ? (<li className={classComponent}>
//       <NavLink to={ADMIN_ROUTE} className="nav-link" onClick={handleNavLinkClick}>Admin cabinet</NavLink>
//     </li>) : null;
// };

const styles = {
    navbar_general: {
        composes: ['nav', 'flex-column', 'col-2', 'align-items-center'],
        backgroundColor: '#003f58',
    },
    navbar_brand_icon: {
        composes: ['navbar-brand', 'row', 'justify-content-center', 'align-items-center'],
        marginTop: '55px',
    },
    navbar_nav: {
        composes: ['navbar-nav', 'row', 'col-12', 'align-items-start'],
        'justify-content': 'center',
        alignSelf: 'center',
        paddingLeft: '27%',
        paddingTop: '63px',
    },
    navItem: {
        composes: ['nav-item'],
        lineHeight: '2',
    },
    wallet: {
        composes: ['nav-link'],
        color: '#12b9c3',
        fontSize: '36px',
        '&:hover': {
            color: 'white',
        },
    },
    navLink: {
        composes: ['nav-link'],
        color: '#12b9c3',
        fontSize: '24px',
        '&:hover': {
            color: 'white',
        },
    },
    navLinkNotActive: {
        composes: ['nav-link'],
        color: '#12b9c3',
        fontSize: '24px',
        opacity: 0.5,
        '&:hover': {
            color: 'white',
            cursor: 'not-allowed',
        },
    },
};


const Nav = ({ classes }: { classes: Object }) =>
  (<nav className={classes.navbar_general}>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="row justify-content-center">
      <Link to={HOME_PAGE_ROUTE} className={classes.navbar_brand_icon}>
          &nbsp;
      </Link>
      <ul className={classes.navbar_nav}>
        <li className={classes.navItem}>
          <NavLink
            to={'/wallet'}
            className={classes.wallet}
            activeStyle={{ color: 'white' }}
            exact
            onClick={handleNavLinkClick}
          >Wallet</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to={'/dashbord'} className={classes.navLink} exact onClick={handleNavLinkClick}>Dashbord</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to={'/voting'} className={classes.navLinkNotActive} exact onClick={handleNavLinkClick}>Voting</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to={'/exchange'} className={classes.navLinkNotActive} exact onClick={handleNavLinkClick}>Exchange</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to={'/faq'} className={classes.navLink} exact onClick={handleNavLinkClick}>FAQ</NavLink>
        </li>
        {/* <UserName user={user} classComponent={classes.navItem} /> */}
        {/* <ProtectedLink user={user} classComponent={classes.navItem} /> */}
        {/* <AdminLink user={user} classComponent={classes.navItem} /> */}
        {/* <li className={classes.navItem}> */}
        {/* <LoginLink user={user.data} /> */}
        {/* <LogoutLink user={user.data} logoutUser={logoutUser} /> */}
        {/* </li> */}
      </ul>
    </div>
  </nav>);

const mapStateToProps = state => ({
    user: state.user.toJS(),
});

const mapDispatchToProps = {
    logoutUser: logout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Nav)));
