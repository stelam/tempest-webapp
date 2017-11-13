/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import AddIcon from 'material-ui-icons/Add';


const styles = theme => ({
  textField: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  }
});

class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={this.props.className}>
        <Button onClick={this.handleClickOpen} fab color="primary" aria-label="add" >
          <AddIcon />
        </Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Create a node war</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill in the details of the node war.
            </DialogContentText>
            <form noValidate>
              <TextField
                id="date"
                label="Date of node war"
                type="date"
                defaultValue={new Date().toISOString().slice(0,10)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FormDialog);