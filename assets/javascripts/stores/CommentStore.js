import alt from '../FluxAlt';
import React from 'react/addons';
import CommentActions from '../actions/CommentActions';

class CommentStore {
  constructor(){
    this.comments = [];
    this.bindListeners({
      handleAddComment: CommentActions.ADD_COMMENT,
    });
  }

  handleAddComment(comment) {
    // const oldComments = this.comments;
    // this.comments = React.addons.update(oldComments, {$push: [comment]});
    this.comments.push(comment);
  }
};

export default alt.createStore(CommentStore, 'CommentStore');
