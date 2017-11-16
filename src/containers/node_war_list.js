// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import classNames from 'classnames';

import NodewarButton from '../components/node_war_button';
import NodewarEdition from './node_war_edition';
import AttendanceButton from './attendance_button';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
    '& th, & td': {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  buttonAdd: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3
  },
  tableWar: {
    '& button': {
      minWidth: 0
    },
    '& td': {
      textAlign: 'center'
    }

  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class NodewarTable extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Member</TableCell>
                  <TableCell numeric>#</TableCell>
                  <TableCell numeric>Total</TableCell>
                  <TableCell numeric>Last month</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.name}</TableCell>
                      <TableCell numeric>{n.calories}</TableCell>
                      <TableCell numeric>{n.fat}</TableCell>
                      <TableCell numeric>{n.carbs}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.root}>
            <Table className={classNames(classes.table, classes.tableWar)}>
              <TableHead>
                <TableRow>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                  <TableCell numeric><NodewarButton date="8/3" /></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                      <TableCell numeric><AttendanceButton /></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
          <NodewarEdition className={classes.buttonAdd} />
        </Grid>
      </Grid>
    );
  }
}

NodewarTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NodewarTable);