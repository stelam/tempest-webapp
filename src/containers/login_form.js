// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

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

function LoginForm(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <form>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            You need to login to continue.
          </Typography>
          <div className={classes.details}>
          <TextField
            id="email"
            label="email"
            className={classes.textField}
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </div>
        </CardContent>
        <CardActions>
          <Button className={classes.loginButton}>Login</Button>
        </CardActions>
      </Card>
    </form>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);