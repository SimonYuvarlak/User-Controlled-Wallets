'use client';
import React from 'react';
import axios from 'axios';

const CreateWallet = () => {

  const create_wallet = () => {
    console.log("Initialize user function has been called");
  };

  return (
    <div>
      <button onClick={() => create_wallet()}>Create Wallet</button>
    </div>
  );
};

export default CreateWallet;