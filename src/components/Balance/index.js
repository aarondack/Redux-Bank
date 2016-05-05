import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Balance = ({ money }) => {

const positiveOrNegative = classNames({
    'ui header red': money < 0,
    'ui header green': money >= 0
  });

return (
    <div>
        <h2 className="ui header">Current Balance</h2>
        <h2 className={positiveOrNegative}>${money}</h2>
    </div>
  )
}

Balance.propTypes = {
    money: PropTypes.number.isRequired
}

export default Balance;
