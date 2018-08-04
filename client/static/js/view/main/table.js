import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import store from '../../store/main';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class MyTable extends React.Component{
  constructor(props){
    super(props);
    this.state={list:[]};
    //this.classes=PropTypes.object.isRequired;
    var _this=this;
    store.getAllData(function (data) {
      var i = 0;
      var len = data.length;
      var list=[];
      for(; i<len; i++) {
        list.push({
          name:i,
          address:data[i].Message,
          key: i
        });
      }
      _this.setState({list:list});
    })
  }
  render(){
    return(
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>Dessert (100g serving)</CustomTableCell>
              <CustomTableCell numeric>Calories</CustomTableCell>
              <CustomTableCell numeric>Fat (g)</CustomTableCell>
              <CustomTableCell numeric>Carbs (g)</CustomTableCell>
              <CustomTableCell numeric>Protein (g)</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.list.map(n => {
              return (
                <TableRow key={n.id}>
                  <CustomTableCell component="th" scope="row">
                    {n.name}
                  </CustomTableCell>
                  <CustomTableCell numeric>{n.calories}</CustomTableCell>
                  <CustomTableCell numeric>{n.fat}</CustomTableCell>
                  <CustomTableCell numeric>{n.carbs}</CustomTableCell>
                  <CustomTableCell numeric>{n.protein}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withStyles(styles)(MyTable);
