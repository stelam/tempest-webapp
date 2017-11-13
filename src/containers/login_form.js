// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { login } from '../actions/index';

const styles = theme => ({
  card: {
    width: 320,
    margin: `${theme.spacing.unit * 2}px auto`
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  loginButton: {
    marginLeft: 'auto'
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class LoginForm extends React.Component {

  // stubbed login 
  login(values) {
    this.props.login(true);
    this.props.history.push('/');
  }

  renderTextField({input, ...customAttributes}) {
    return (
      <TextField
        {...input}
        {...customAttributes}
        className={this.props.classes.textField}
      />
    );
  }


  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.login.bind(this))}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="body1" className={classes.title}>
              You need to login to continue.
            </Typography>
            <div className={classes.details}>

            <Field name="email" id="email" label="email" component={this.renderTextField.bind(this)} />
            <Field margin="normal" type="password" id="password" label="password" name="password" component={this.renderTextField.bind(this)} />

          </div>
          </CardContent>
          <CardActions>
            <Button type="submit" className={classes.loginButton}>Login</Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default withStyles(styles)(
  reduxForm({form: 'LoginForm'})(
    connect(mapStateToProps, mapDispatchToProps)(LoginForm)
  )
);