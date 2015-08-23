import alt from '../FluxAlt';
import CommentsManager from '../utils/CommentsManager';
import CommentActions from './CommentActions';

class FormActions {
  submitComment(url, comment){
    CommentsManager.submitComment(url, comment)
      .then((returnedComment) => {
          console.log('action return');
          console.log(comment);
          CommentActions.addComment(returnedComment);
        },
        () => {

        }
      )
  }
};

export default alt.createActions(FormActions);
