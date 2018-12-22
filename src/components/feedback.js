import React from "react";

export default function Feedback(props) {
  const key = props.guessCount;

  let guessAnother;
  if (key !== 0) {
    guessAnother = <span className="visuallyhidden">Try Again!</span>;
  }
  return (
    <h2
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.feedback} {guessAnother}
    </h2>
  );
}
