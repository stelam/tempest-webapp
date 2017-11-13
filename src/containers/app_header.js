/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import FaceIcon from 'material-ui-icons/Face';
import BeenHereIcon from 'material-ui-icons/BeenHere';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleNavigation } from '../actions/index';
import { DRAWER_WIDTH } from './navigation';

const styles = theme => ({
  appFrame: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'stretch'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  logoLoggedOut: {
    marginLeft: theme.spacing.unit * 4 
  }
});

class AppHeader extends React.Component {

  render() {
    const { classes, theme, navigationOpened, loggedIn } = this.props;
    
    return (
      <div>
          <AppBar className={classNames(classes.appBar, navigationOpened && classes.appBarShift)}>
            <Toolbar disableGutters={!navigationOpened}>
              {loggedIn && 
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={() => this.props.toggleNavigation(true)}
                  className={classNames(classes.menuButton, navigationOpened && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              }
              <Typography className={classNames(!loggedIn && classes.logoLoggedOut)} type="title" color="inherit" noWrap>
                Tempest Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    navigationOpened: state.navigationOpened,
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNavigation }, dispatch);
}

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(AppHeader)
);
