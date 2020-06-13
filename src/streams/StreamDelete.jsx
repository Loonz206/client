import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import history from "../utils/history";
import { fetchStream } from "../actions";

class StreamDelete extends Component {
  componentDidMount() {
    console.log("yo lenny here is the props", this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <>
        <button type="button" className="ui button negative">
          Delete
        </button>
        <button type="button" className="ui button">
          Cancel
        </button>
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
  { fetchStream }
)(StreamDelete);
