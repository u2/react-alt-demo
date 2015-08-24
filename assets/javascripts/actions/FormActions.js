import alt from '../FluxAlt';
import CommentsManager from '../utils/CommentsManager';
import CommentActions from './CommentActions';

class FormActions {
  submitComment(url, comment){
    CommentsManager.submitComment(url, comment)
      .then((returnedComment) => {
          CommentActions.addComment(returnedComment);
        },
        () => {

        }
      )
  }
};

export default alt.createActions(FormActions);
