import React, { PropTypes } from 'react';

const Ledger = ({ ledger }) => (
    <div className="ui divided very relaxed list">
      {ledger.map((data,i ) => (
          <div key={i} className="ui item">${data}</div>
      ))}
    </div>
);

Ledger.propTypes = {
  ledger: PropTypes.array.isRequired
};

export default Ledger;
