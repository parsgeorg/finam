import React, { Component } from "react";

const CommentContext = React.createContext();

class CommentProvider extends Component {
  state = {
    comments: [
      {
        id: 0,
        name: "Dimon",
        text: "Yoa are going!",
        date: "26.04.2018"
      },
      {
        id: 1,
        name: "Van",
        text: "Stop, please!",
        date: "27.04.2018"
      }
    ],
    isModalShow: false,
    idModalComment: 0,
    titleWindowModalComment: 'Окно редактирования',
    dataModalComment: '',
    btnName: ''
    
  };

  createComment = ({ name, text }) => {
    const id = this.state.comments.length;
    const dateObj = new Date();
    const date =
      dateObj.getHours() +
      ":" +
      dateObj.getMinutes() +
      ":" +
      dateObj.getSeconds();
    const comment = {
      id,
      name,
      text,
      date
    };
    const comments = this.state.comments.concat(comment);
    this.setState(() => {
      return {
        ...this.state.comments,
        comments
      };
    });
  };

  removeComment = id => {
    const comments = this.state.comments.filter(comment => comment.id !== id);
    this.setState(() => {
      return {
        ...this.state.comments,
        comments
      };
    });
  };

  openModal = (idModalComment, titleWindowModalComment, dataModalComment, btnName) => {
   
    this.setState(() => {
      return {
        ...this.state.comments,
        isModalShow: true,
        titleWindowModalComment,
        idModalComment,
        dataModalComment,
        btnName
      };
    });
    
  }

  closeModal = () => {
    this.setState(() => {
      return {
        ...this.state.comments,
        isModalShow: false
      };
    });
    console.log(this.state.isModalShow);
  }

  render() {
    const {idModalComment, titleWindowModalComment, dataModalComment, btnName} = this.state
    return (
     
      <CommentContext.Provider
        value={{
          ...this.state,
          createComment: this.createComment,
          removeComment: this.removeComment,
          openModal: this.openModal,
          closeModal: this.closeModal,
          idModalComment,
          titleWindowModalComment,
          dataModalComment,
          btnName
          
        }}
      >
        {this.props.children}
      </CommentContext.Provider>
     );
  }
}

const CommentConsumer = CommentContext.Consumer;

export { CommentProvider, CommentConsumer };
