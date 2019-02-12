import React from "react";
import { Button } from "reactstrap";
import { CommentConsumer } from "../../context";

const View = props => {
  const {
    name,
    text,
    nameValid,
    nameTouched,
    nameEr,
    textValid,
    textTouched,
    textEr
  } = props.data;
  const { changeName, changeText } = props;
  return (
    <CommentConsumer>
      {value => {
        const { createComment } = value;

        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <form className="text-center">
                  <input
                    type="text"
                    className={`form-control ${nameEr && "erField"}`}
                    placeholder="Name"
                    value={name}
                    onChange={ev => changeName(ev)}
                  />
                  {nameTouched && !nameValid ? (
                    <div className={nameEr && "er"}>{nameEr}</div>
                  ) : (
                    ""
                  )}
                  <textarea
                    className={`form-control ${textEr && "erField"}`}
                    placeholder="Comment"
                    value={text}
                    onChange={ev => changeText(ev)}
                  />
                  {textTouched && !textValid ? (
                    <div className={textEr && "er"}>{textEr}</div>
                  ) : (
                    ""
                  )}
                  <Button
                    color="success"
                    onClick={() => createComment({ name, text })}
                    disabled={!nameValid || !textValid}
                  >
                    Send
                  </Button>
                </form>
                <hr />
              </div>
            </div>
          </div>
        );
      }}
    </CommentConsumer>
  );
};

export default View;
