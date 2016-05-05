export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';
export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';

export function depositMoney(value) {
  return {
    type: DEPOSIT_MONEY,
    deposit: parseFloat(value)
  };
}

export function withdrawMoney(value) {
  return {
    type: WITHDRAW_MONEY,
    withdrawl: parseFloat(value)
  };
}
