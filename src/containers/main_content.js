import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from './login_form';
import NodeWarIndex from '../components/node_war_index';
import MemberList from './member_list';

import { DRAWER_WIDTH } from './navigation';

const styles = theme => ({
  content: {
    width: '100%',
    marginLeft: -DRAWER_WIDTH,
    flexGrow: 1,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('padding', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  contentShift: {
    paddingLeft: DRAWER_WIDTH + theme.spacing.unit * 3,
    transition: theme.transitions.create('padding', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
});


class MainContent extends Component {

  componentWillMount() {
    if (!this.props.loggedIn && this.props.path !== '/login') {
      this.props.history.push('/login');
    }
  }

  
  render() {
    const { classes, theme } = this.props;

    return (
      <main className={classNames(classes.content, this.props.navigationOpened && classes.contentShift)}>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/members" component={MemberList} />
          <Route path="/" component={NodeWarIndex} />
        </Switch>
      </main>
    );
  }
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    navigationOpened: state.navigationOpened
  }
}


export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps)(MainContent)
  )
);