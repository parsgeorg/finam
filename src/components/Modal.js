import React from "react";
import {CommentConsumer} from '../context';

export default class Modal extends React.Component {
  render() {
    return (
      <CommentConsumer>
        {value => {
          const {isModalShow, closeModal, idModalComment, titleWindowModalComment, dataModalComment, btnName, removeComment} = value;
         
          if(!isModalShow) return null
          else {
            return (
              //<div className="modal fade">
              <div className="modal">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">{titleWindowModalComment}</h4>
                    </div>
                    <div className="modal-body">
                      <p>{dataModalComment  + idModalComment}?</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModal()}>Close</button>
                      <button type="button" className="btn btn-primary" onClick={() => {closeModal(); removeComment(idModalComment);}}>{btnName}</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          
        }}
      </CommentConsumer>
    );
  }  
}
   

