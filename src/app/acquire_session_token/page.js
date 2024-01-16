"use client";
import React from "react";
import { acquire_session_token } from "../api/acquire_session_token/route";

const AcquireSessionToken = () => {
  const retrieve_token = () => {
    acquire_session_token();
  };

  return (
    <div>
      <button onClick={() => retrieve_token()}>Acquire Session Token</button>
    </div>
  );
};

export default AcquireSessionToken;
