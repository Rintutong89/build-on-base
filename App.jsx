import React from 'react';

const WalletButton = () => {
  return (
    <button style={{
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }}>
      Connect Wallet
    </button>
  );
};

export default WalletButton;