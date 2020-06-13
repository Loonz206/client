import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import history from "../utils/history";
import { fetchStream, deleteStream } from "../actions";

class StreamDelete extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          type="button"
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" type="button" className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  renderContent = () => {
    if (!this.props.state) {
      return `Are you sure you want to delete this stream?`;
    }
    return `Are you sure you want to delete the stream with title: ${this.props.state.title}`;
  };

  render() {
    const translations = {
      headerTitle: "Delete Stream",
      route: "/"
    };
    const { headerTitle, route } = translations;
    return (
      <Modal
        headerTitle={headerTitle}
        contentText={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push(route)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { state: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
