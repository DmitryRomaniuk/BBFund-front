// @flow

// import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { APP_NAME } from '../../config';
import UserAccount from './userAccount';
import styles from './home-styles';


class HomePage extends Component {
    static defaultProps: Object;

    render() {
        return (<div className="col-10">
          <Helmet
            meta={[
                    { name: 'description', content: 'BBFUND' },
                    { property: 'og:title', content: APP_NAME },
            ]}
          />
          <div className={this.props.classes.general}>
            <header className={this.props.classes.header}>
              <div className={this.props.classes.headerLinks}>
                <Link className={this.props.classes.navLink} to={'/white-papper'}>White Papper</Link>
                <Link className={this.props.classes.navLink} to={'/factsheet'}>Factsheet</Link>
                <Link className={this.props.classes.navLink} to={'/presentation'}>Presentation</Link>
              </div>
              <div className={this.props.classes.loginLinks}>
                <div className={this.props.classes.navBlockLogin}>
                  <span className={this.props.classes.text}>investor@gmail.com</span>
                  <NavLink
                    className={this.props.classes.navLink}
                    activeStyle={{ color: 'white' }}
                    to={'/logout'}
                  >Logout</NavLink>
                </div>
                <div className={this.props.classes.navBlockLogin}>
                  <span className={this.props.classes.text}>KYC level:</span>
                  <UserAccount classToProps={this.props.classes.navLink} />
                </div>
              </div>
            </header>
            <div className={this.props.classes.body}>
              <div className={this.props.classes.stage}>
                <div className={this.props.classes.stageTitle}>Stage</div>
                <div className={this.props.classes.timeline}>
                  <div className="arrow_box first_arrow_box">
                    <span>Pre-ICO</span>
                    <span className={this.props.classes.IcoTextEmptyField}>Oct, 1 - Oct, 30</span>
                  </div>
                  <div className="arrow_box">
                    <span>ICO</span>
                    <span className={this.props.classes.IcoTextEmptyField}>Nov, 1 - Nov, 30</span>
                  </div>
                </div>
              </div>
              <div className={this.props.classes.tokenBlockWrapper}>
                <div className={this.props.classes.tokenBlocks}>
                  <div className={this.props.classes.tokenBlock}>
                    <div className={this.props.classes.tokenPrice}>
                      <span className={this.props.classes.tokenTitle}>Token Price</span>
                      <div className={this.props.classes.tokenPriceNumberBlock}>
                        <span className={this.props.classes.tokenPriceNumber}>0.8 ETH</span>
                        <span className={this.props.classes.tokenPriceDiscount}>(20% discount)</span>
                      </div>
                    </div>
                    <div className={this.props.classes.tokenSold}>
                      <span className={this.props.classes.tokenSoldTitle}>Token Price</span>
                      <div className={this.props.classes.tokenSoldNumberBlock}>
                        <span className={this.props.classes.tokenSoldNumber}>
                                        32&nbsp;198&nbsp;
                                        <span className={this.props.classes.tokenSoldCount}>
                                            /&nbsp;50&nbsp;000
                                        </span>
                        </span>
                        <div className={this.props.classes.tokenSoldProgressBar}>
                          <div className={this.props.classes.tokenSoldProgressBarComplete} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className={this.props.classes.tokenBlockHr} />
                </div>
              </div>
              <div className={this.props.classes.verifyBlock}>
                <div className={this.props.classes.verifyTitle}>VERIFY YOUR IDENTITY</div>
                <div className={this.props.classes.verifyDescription}>
                  {'BB Fund uses an own portfolio project BAASIS ID for customer on-boarding, KYC and AML ' +
                    'investigations. Moreover, BAASIS serves the main BB Fund\'s principles and verifies whether ' +
                    'investor is qualified, resident of the US, Singapore or others, makes an own processing for ' +
                    'AML, PEP, OFAC in over 190 countries for sanctions screening and other issues.'}
                </div>
              </div>
              <div className={this.props.classes.tokenPrice}>
                <span className={this.props.classes.tokenTitle}>Your BB Token balance</span>
                <div className={this.props.classes.yourTokenBalance}>
                  <span className={this.props.classes.tokenPriceNumber}>12 BB Tokens</span>
                </div>
              </div>
              <div className={this.props.classes.purchaseTokens}>
                <div className={this.props.classes.purchaseTokensTitle}>PURCHASE TOKENS</div>
              </div>
              <div className={this.props.classes.spendTokens}>
                        Spend&nbsp;<span className={this.props.classes.spendETH}>5</span>&nbsp;ETH/
                        <span className={this.props.classes.spendTokensGetBB}>Get 6.25 BB Tokens</span>
              </div>
            </div>
          </div>
        </div>);
    }
}


HomePage.propTypes = {
    // eslint-disable-next-line react/require-default-props
    classes: PropTypes.objectOf(PropTypes.shape({
        jumbotron: PropTypes.string,
        'jumbotron-text': PropTypes.string,
        'jumbotron-text-banner': PropTypes.string,
        motoTypesOverview: PropTypes.string,
        motoTypesEach: PropTypes.string,
    })),
};

HomePage.defaultProps = {
};

const mapStateToProps = state => ({
    listMotoOverview: state.listHome.get('listMoto').toJS(),
});

export default connect(mapStateToProps)(injectSheet(styles)(HomePage));
