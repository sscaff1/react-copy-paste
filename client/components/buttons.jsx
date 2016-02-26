import React from 'react';

export const DeleteButton = ({handleDelete}) => (
  <button className="btn btn-danger" onClick={handleDelete}>
    <span className="fa fa-remove fa-2x"></span>
  </button>
);

export const CopyButton = ({copyId}) => (
  <button className="btn btn-default">
    <span className="fa fa-copy fa-2x" data-clipboard-target={copyId}></span>
  </button>
);
