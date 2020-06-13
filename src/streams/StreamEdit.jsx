import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
  }

  onSubmit = formValues => {
    const { id } = this.props.match.params;

    this.props.editStream(id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const editStreamHeadline = "Edit a stream";
    const { title, description } = this.props.stream;
    return (
      <div>
        <h3>{editStreamHeadline}</h3>
        <StreamForm
          initialValues={{
            title,
            description
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
