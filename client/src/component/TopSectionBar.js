import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import { Toolbar,
         Typography,
         IconButton,
         Button
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const sections = [
    {title:'Web',val:'WebTech'},
    {title:'Algorithm',val:'AlgoTech'},
    {title:'Design Pattern',val:'DPTech'},
    {title:'Data Science',val:'DataTech'},
    {title:'IT Trend',val:'ITTrend'},
];

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
});

class TopSectionBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes:props.classes
        }
    }

    render = () => {
        return(
            <React.Fragment>
                <div className={this.state.classes.layout}>
                <Toolbar className={this.state.classes.toolbarMain}>
                    <Typography
                        variant="display3"
                        color="inherit"
                        align="center"
                        noWrap
                        className={this.state.classes.toolbarTitle}>
                        <Link to="/" className="ml1 no-underline black">
                            Svilup
                        </Link>
                    </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <Button variant="outlined" size="small">
                        Sign up
                    </Button>
                </Toolbar>
                <Toolbar variant="dense" className={this.state.classes.toolbarSecondary}>
                    {sections.map(section => (
                <Typography color="inherit" noWrap key={section.title}>
                    <Link to={"/"+section.val} className="ml1 no-underline black">
                        {section.title}
                    </Link>
                </Typography>
                ))}
                </Toolbar>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TopSectionBar);