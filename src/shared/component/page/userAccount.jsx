// @flow

import injectSheet from 'react-jss';
import React from 'react';

const styles = {
    navLink: {
        composes: ['nav-link'],
        display: 'inline-flex',
        color: '#12b9c3',
        textDecoration: 'underline',
        '&:hover': {
            color: 'white',
            cursor: 'pointer',
        },
    },
};

const UserAccount = ({ classes }: { classes: Object }) => (<div className={classes.navLink}>Not verified account</div>);
export default injectSheet(styles)(UserAccount);
