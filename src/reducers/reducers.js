const initialState = {
  balance: 0,
  ledger: []
}

const bankApp = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT_MONEY':
      return {
        ...state,
        balance: state.balance + action.deposit,
        ledger: [...state.ledger, "+" + action.deposit]
      }
    case 'WITHDRAW_MONEY':
      return {
        ...state,
        balance: state.balance - action.withdrawl,
        ledger: [...state.ledger, "-" + action.withdrawl]
      }
    default:
      return state;
  }
}

export default bankApp;
