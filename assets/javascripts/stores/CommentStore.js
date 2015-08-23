import alt from '../FluxAlt';
import React from 'react/addons';
import CommentActions from '../actions/CommentActions';
import Immutable from 'immutable';

class CommentStore {
  constructor(){
    this.comments = Immutable.List();
    this.bindListeners({
      handleAddComment: CommentActions.ADD_COMMENT,
    });
  }

  handleAddComment(comment) {
    this.comments = this.comments.push(comment);
  }
};

export default alt.createStore(CommentStore, 'CommentStore');
