import React from 'react';

export default function UnLike(props) {
  return (
    <button onClick={props.onClick} type="button" className="btn btn-danger">
      <i className="fas fa-thumbs-down" />
    </button>
  );
}
