import alt from '../FluxAlt';

class CommentActions {
  addComment(comment){
    this.dispatch(comment);
  }
};

export default alt.createActions(CommentActions);
