import React from "react";

export default function UnLike(props) {
  return (
    <button onClick={props.onClick} type="button" class="btn btn-danger">
      <i class="fas fa-thumbs-down" />
    </button>
  );
}
