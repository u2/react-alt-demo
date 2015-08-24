import alt from '../FluxAlt';
import CommentActions from '../actions/CommentActions';
import Immutable from 'immutable';

class CommentStore {
  constructor(){
    this.comments = Immutable.List();
    this.bindListeners({
      handleAddComment: CommentActions.ADD_COMMENT,
      handleFetchComments: CommentActions.FETCH_COMMENTS,
      handleUpdateComments: CommentActions.UPDATE_COMMENTS,
    });
  };

  handleFetchComments(){
    return false;
  }

  handleUpdateComments(comments){
    this.comments = Immutable.fromJS(comments);
  }

  handleAddComment(comment) {
    this.comments = this.comments.push(Immutable.fromJS(comment));
  };
};

export default alt.createStore(CommentStore, 'CommentStore');
