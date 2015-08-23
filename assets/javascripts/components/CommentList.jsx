import React from 'react';
import Comment from './Comment';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

const CommentList = new React.createClass({
  displayName: 'CommentList',

  propTypes: {
    // comments: React.PropTypes.array
    // comments: ImmutablePropTypes.list,
    comments: React.PropTypes.instanceOf(Immutable.List),
  },

  render(){
    let commentNodes = this.props.comments.reverse().map((comment, index) => {
      return (
        <Comment author={comment.author} text={comment.text} key={index} />
      );
    });
    return(
      <div className='commentList'>
        {commentNodes}
      </div>
    );
  }
});

export default CommentList;
