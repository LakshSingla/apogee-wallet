import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Typography, List, ListSubheader, ListItem, ListItemText, Divider } from "@material-ui/core";

import AppList from '../AppList'
import * as orders from '@/actionCreators/orders'
import classes from './styles.module.scss'

class PastTransactions extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getPastTransactions()
  }
  render() {
    // return <></>
    if (!this.props.orders.pastTransactions) return <Fragment />
    return (
      <Fragment>
        <Typography variant="h4">PAST TRANSACTIONS</Typography>
        <List id={classes.pastTransactionTable} subheader={<li />}>
          {
            this.props.orders.pastTransactions.map((order, key) => (
              <li key={key}>
                <ul>
                  <ListSubheader >{order.vendor.name}</ListSubheader>
                  {order.items.map(item => (
                    <ListItem key={item.id} >
                      <ListItemText primary={item.name} secondary={item.quantity} />
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}></div>
                    </ListItem>
                  ))}
                  <Divider />
                </ul>
              </li>
            ))

          }
        </List>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, orders), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PastTransactions)