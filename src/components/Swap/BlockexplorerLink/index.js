import React, { Component } from "react";

class BlockexplorerLink extends Component {

  render() {
    const { type, tx, amount } = this.props;
    return (
      <React.Fragment>
        {{
         0: (<React.Fragment><b>{amount} Remme tokens</b> have been sent: <a href={"/transaction/" + tx} target="_blank" rel="noopener noreferrer">Transaction link</a></React.Fragment>),
         1: (<React.Fragment><b>{amount} Remme tokens</b> have been sent.<br/>It will be credited to your <a href={`${process.env.REACT_APP_ETH_TRANSACTION_LINK}${tx}#tokentxns`} target="_blank" rel="noopener noreferrer">address</a> within an hour.</React.Fragment>)
        }[type]}
      </React.Fragment>
    )
  }
}

export default BlockexplorerLink;
