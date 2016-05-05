import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withdrawMoney, depositMoney } from '../actions';
import Balance from '../components/Balance';
import Ledger from '../components/Ledger';
import Transaction from '../components/Transaction';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        const { ledger, balance, onWithdrawClick, onDepositClick } = this.props;

        return (
            <div className="ui raised very padded text container segment" style={{
                "textAlign": "center",
                "marginTop": "50px"
            }}>
                <Balance money={balance}/>
                <Transaction withdraw={onWithdrawClick} deposit={onDepositClick}/>
                <Ledger ledger={ledger}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {ledger: state.ledger, balance: state.balance}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onWithdrawClick: (value) => {
            dispatch(withdrawMoney(value))
        },
        onDepositClick: (value) => {
            dispatch(depositMoney(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
