import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import Header from '../containers/header';
import Navigation from '../containers/navigation';
import MainContent from '../containers/main_content';

import { DRAWER_WIDTH } from '../containers/navigation';

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'stretch'
  }
});


class App extends Component {

  state = {
    open: false,
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header />
          <Navigation />
          <MainContent />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);