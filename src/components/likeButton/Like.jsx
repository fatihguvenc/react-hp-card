import React from "react";

export default function Like(props) {
  return (
    <button
      name="increase"
      onClick={props.onClick}
      type="button"
      className="btn btn-success button-like"
    >
      <i class="fas fa-thumbs-up" />
    </button>
  );
}
