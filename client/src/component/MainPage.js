import React from 'react';
import {  } from 'react-router-dom'
import { withRouter } from 'react-router'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline,
         Paper,
         Typography,
         Grid,
         Divider
}from '@material-ui/core';

import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

//component
import Intro from './Intro';
import MemberList from './MemberList';
import Timeline from './Timeline';

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
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const social = ['GitHub', 'Facebook'];

function MainPage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          <Intro/>
          <MemberList/>
          <Timeline/>
          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="title" gutterBottom>
                Sub-Project
              </Typography>
              <Divider />
              <Typography variant="title" color="textSecondary" component="p">
                Postit!
              </Typography>
              <AnnotatedMeter legend={true}
                              size='medium'
                              type='bar'
                              max={100}
                              series={[{"label": "진행", "value": 20, "colorIndex": "graph-1"}, {"label": "남음", "value": 80, "colorIndex": "graph-2"}]} />
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="title" gutterBottom>
                  We make some tool or App to make somethig easy
                </Typography>
                <Typography>
                  일을 하면서 불편한 점을 보완하거나 실용적인 업무 지원Tool
                </Typography>
              </Paper>
              
              <Typography variant="title" gutterBottom className={classes.sidebarSection}>
                요기는 소셜공유 영역
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subheading" align="left" color="textSecondary" component="p">
          e-Mail : jaducku@gmail.com<br/>
          Git Hub : https://github.com/jaducku
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MainPage));