import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    const streamCreateHeader = "Create a stream";
    return (
      <div>
        <h3>{streamCreateHeader}</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
