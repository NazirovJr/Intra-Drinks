import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    ul: {
        justifyContent: 'space-around',
    },
    coinsImage: {
        width: '80px',
        height: '80px',
        cursor: 'pointer',
        marginLeft: '20px',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    strikeDiag: {
        opacity:'30%',
    },
    coinsCard: {
        display: 'flex',
        backgroundPosition: '50% 0%',
        verticalAlign: 'top',
        justifyContent: 'space-between'
    },
    coinsIcon: {
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        marginLeft: '20px',
    },
}));
