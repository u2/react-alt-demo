import alt from '../FluxAlt';
import CommentsManager from '../utils/CommentsManager';

class CommentActions {
  addComment(comment){
    this.dispatch(comment);
  };

  fetchComments(url) {
    CommentsManager.fetchComments(url)
      .then((comments) => this.actions.updateComments(comments),
      (errorMessage) => this.actions.updateCommentsError(errorMessage));
  };

  updateComments(comments) {
    this.dispatch(comments);
  };
};

export default alt.createActions(CommentActions);
