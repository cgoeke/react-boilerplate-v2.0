import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
      <div className="login">
        <div className="login__box">
          <h1 className="login__title">React Boilerplate</h1>
          <p>version 2.0</p>
          <button className="button" 
            onClick={startLogin} 
            type="submit">
              Login with Google
          </button>
        </div>
      </div>
    );

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);