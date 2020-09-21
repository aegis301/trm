import * as React from "react";
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as TechLabsIconWhite } from '../static/techlabs-icon-white.svg';


const useStyles = makeStyles({
    logo: {
        height: '30px',
        marginRight: '0.5em'
    },
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const TRMAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <TechLabsIconWhite className={classes.logo} />
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <span className={classes.spacer} />
        </AppBar>
    );
};

export default TRMAppBar;
