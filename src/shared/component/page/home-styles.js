module.exports = {
    '@media (max-width: 800px)': {
        resizeMe: {
            color: 'red',
        },
    },
    general: {
        composes: ['container-fluid', 'row'],
        backgroundColor: '#005866',
        color: '#12b9c3',
        fontSize: '24px',
    },
    header: {
        display: 'flex',
        'justify-content': 'space-between',
        width: '100%',
        margin: '92px 70px 0',
    },
    headerLinks: {
        display: 'inline-flex',
        'justify-content': 'flex-start',
        width: '100%',
    },
    text: {
        color: 'white',
    },
    loginLinks: {
        display: 'inline-flex',
        'justify-content': 'flex-end',
        width: '100%',
        'flex-direction': 'column',
    },
    navLink: {
        composes: ['nav-link'],
        display: 'inline-flex',
        color: '#12b9c3',
        textDecoration: 'underline',
        '&:hover': {
            color: 'white',
        },
    },
    navBlockLogin: {
        display: 'inline-flex',
        'justify-content': 'flex-end',
        'align-items': 'center',
    },
    body: {
        margin: '16px 78px',
    },
    timeline: {
        marginTop: '10px',
        display: 'inline-flex',
        position: 'relative',
    },
    preIco: {
        borderTop: '3px solid #12b9c3',
        borderLeft: '3px solid #12b9c3',
        borderBottom: '3px solid #12b9c3',
        display: 'inline-flex',
        padding: '25px 20px 25px 20px',
        color: 'white',
        position: 'relative',
    },
    Ico: {
        borderTop: '3px solid #12b9c3',
        borderBottom: '3px solid #12b9c3',
        display: 'inline-flex',
        padding: '25px 20px 25px 20px',
        color: 'white',
    },
    IcoTextEmptyField: {
        paddingLeft: '80px',
    },
    stage: {
        display: 'flex',
        flexDirection: 'column',
    },
    stageTitle: {
        display: 'flex',
    },
    tokenBlockWrapper: {
        display: 'flex',
    },
    tokenBlock: {
        display: 'inline-flex',
    },
    tokenBlocks: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    tokenBlockHr: {
        margin: '65px 0 50px 0',
        border: 0,
        borderTop: '2px solid #10b1bb',
    },
    tokenPrice: {
        display: 'inline-flex',
        flexDirection: 'column',
        marginTop: '55px',
    },
    tokenTitle: {
        marginBottom: '15px',
    },
    tokenPriceNumberBlock: {
        display: 'inline-flex',
        width: '320px',
        height: '100px',
        justifyContent: 'flex-start',
        backgroundColor: '#146675',
        color: 'white',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingRight: '10px',
    },
    tokenPriceNumber: {
        fontSize: '40px',
    },
    tokenPriceDiscount: {
        fontSize: '20px',
    },
    tokenSold: {
        display: 'inline-flex',
        flexDirection: 'column',
        margin: '55px 0 0 40px',
    },
    tokenSoldTitle: {
        marginBottom: '15px',
    },
    tokenSoldNumberBlock: {
        display: 'inline-flex',
        width: '600px',
        height: '100px',
        justifyContent: 'flex-start',
        backgroundColor: '#146675',
        color: 'white',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '0 20px',
    },
    tokenSoldNumber: {
        fontSize: '46px',
        paddingRight: '20px',
    },
    tokenSoldProgressBar: {
        width: '100%',
        marginTop: '10px',
        borderBottom: '8px solid #10b1bb',
        display: 'inline-flex',
        position: 'relative',
    },
    tokenSoldProgressBarComplete: {
        position: 'absolute',
        width: '64%',
        borderBottom: '8px solid white',
    },
    tokenSoldCount: {
        color: '#12b9c3',
        fontWeight: '100',
    },
    verifyBlock: {

    },
    verifyTitle: {
        color: '#12b9c3',
        fontSize: '36px',
    },
    verifyDescription: {
        margin: '20px 0 0 0',
        color: 'white',
        maxWidth: '1100px',
    },
    yourTokenBalance: {
        display: 'inline-flex',
        width: '320px',
        height: '100px',
        justifyContent: 'center',
        backgroundColor: '#146675',
        color: 'white',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingRight: '10px',
    },
    purchaseTokens: {
        marginTop: '55px',
        color: '#12b9c3',
        fontSize: '40px',
    },
    spendTokens: {
        marginTop: '40px',
    },
    spendTokensGetBB: {
        color: 'white',
    },
    spendETH: {
        fontSize: '40px',
        padding: '10px 20px 10px 90px',
        color: 'black',
        backgroundColor: '#77cdd0',
        margin: '0 10px',
    },
};
