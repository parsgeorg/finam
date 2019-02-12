import React, { Component } from "react";
import { CommentConsumer } from "../context";
import Comment from "./Comment";
//import {CommentContext} from './theme-context';

export default class CommentsList extends Component {
  render() {
    ////let comment = this.context;
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <CommentConsumer>
                {value => {
                  return value.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />;
                  });
                }}
              </CommentConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// CommentsList.contextType = CommentContext;
