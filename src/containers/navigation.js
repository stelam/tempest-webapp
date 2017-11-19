/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
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
import { Link, withRouter } from 'react-router-dom'

import { toggleNavigation } from '../actions/index';
import { requestLogout } from '../actions/authentication';

export const DRAWER_WIDTH = 240;

const styles = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuLink: {
    textDecoration: 'none'
  }
});

class Navigation extends React.Component {

  render() {
    const { classes, theme, navigationOpened } = this.props;

    return (
        <Drawer
          type="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={navigationOpened}
        >
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => this.props.toggleNavigation(false)}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <List>
              <Link to="/" className={classes.menuLink}>
                <ListItem button>
                  <ListItemIcon>
                    <BeenHereIcon />
                  </ListItemIcon>
                  <ListItemText primary="Node war attendance" />
                </ListItem>
              </Link>
              <Link to="/members" className={classes.menuLink}>
                <ListItem button>
                  <ListItemIcon>
                    <FaceIcon />
                  </ListItemIcon>
                  <ListItemText primary="Members" />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem onClick={() => this.props.requestLogout()} button>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>

          </div>
        </Drawer>

    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    navigationOpened: state.navigationOpened
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNavigation, requestLogout }, dispatch);
}

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Navigation)
  )
);