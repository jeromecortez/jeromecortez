import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            'position': 'fixed',
            'bottom': theme.spacing(2),
            'right': theme.spacing(2),
            'zIndex': 100,
            '@media only screen and (max-width: 600px)': {
                bottom: theme.spacing(4),
                right: theme.spacing(4)
            }
        },
        fab: {
            'backgroundColor': '#FFF',
            'color': '#151515',
            '&:hover': {
                backgroundColor: '#F0F0F0'
            }
        }
    })
);

const ScrollTop = (props: any) => {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        '#welcome-container',
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const Scroller = (props: any) => {
    const classes = useStyles();
    return (
        <>
            <ScrollTop {...props}>
                <Fab className={classes.fab} size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </>
    );
};

export default Scroller;