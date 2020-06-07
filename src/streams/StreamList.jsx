import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    const { streams } = this.props;
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h2>StreamList</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
