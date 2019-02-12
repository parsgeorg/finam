import React, { Component } from "react";
import { CommentConsumer } from "../context";

export default class Comment extends Component {
  render() {
    const { id, name, text, date } = this.props.comment;

    return (
      <CommentConsumer>
        {value => {
          const openModal = value.openModal;
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-2">{`${name}:`}</div>
                <div className="col-md-4">{`${text}:`}</div>
                <div className="col-md-1 removecomment">
                  <button onClick={() => openModal(id, 'Comments deletion', 'Do you really want to remove item with id=', 'Remove')}>x</button>
                </div>
              </div>
              <div className="row date">
                <div className="col-md-2">{date}</div>
              </div>
              <div className="row" />
            </div>
          );
        }}
      </CommentConsumer>
    );
  }
}
