/* eslint-disable no-shadow */
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    // https://developers.google.com/identity/protocols/OAuth2UserAgent
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_API_KEY,
          scope: "email"
        })
        .then(() => {
          const { getAuthInstance } = window.gapi.auth2;
          this.auth = getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    const { signIn, signOut } = this.props;
    if (isSignedIn) {
      signIn(this.auth.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui red google button"
          type="button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button
        onClick={this.onSignInClick}
        className="ui red google button"
        type="button"
      >
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return (
      <div>
        <p>{this.renderAuthButton()}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
