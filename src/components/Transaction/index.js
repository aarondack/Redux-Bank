import React, { Component, PropTypes } from 'react';
import './Transaction.css';

class Transaction extends Component {
    constructor() {
        super();
    }

    render() {
        const { withdraw, deposit } = this.props;

        return (
            <div>
                <div>
                    <div className="ui input">
                        <input type="text" placeholder="Withdraw/Deposit" ref={node => {
                            this.input = node;
                        }}/>
                    </div>
                    <div className="button-spacing">
                        <button className="ui button red" onClick={() => {
                            this.input.value == '' || isNaN(this.input.value)
                                ? alert('Please enter a number')
                                : withdraw(this.input.value)
                                this.input.value = '';
                        }}>Withdraw Money</button>
                        <button className="ui button green" onClick={() => {
                            this.input.value == '' || isNaN(this.input.value)
                                ? alert('Please enter a number')
                                : deposit(this.input.value)
                                this.input.value = '';
                        }}>Deposit Money</button>
                    </div>
                </div>
            </div>
        );
    }
}

Transaction.propTypes = {
  withdraw: PropTypes.func.isRequired,
  deposit: PropTypes.func.isRequired
}

export default Transaction;
