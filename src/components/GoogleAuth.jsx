import React, { Component } from "react";

class GoogleAuth extends Component {
  constructor() {
    super();
    this.state = { isSignedIn: null };
  }

  componentDidMount() {
    // https://developers.google.com/identity/protocols/OAuth2UserAgent
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "347321476750-0p6445kgq0ldpcbnlj0182bturdib5gp.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  };

  onSignIn = () => {
    this.auth.signInClick();
  };

  onSignOut = () => {
    this.auth.signOutClick();
  };

  renderAuthButton() {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={this.onSignInClick} className="ui red google button">
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

export default GoogleAuth;
