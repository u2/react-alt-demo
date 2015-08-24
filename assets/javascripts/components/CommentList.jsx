import React from 'react';
import Comment from './Comment';
import ImmutablePropTypes from 'react-immutable-proptypes';
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

const CommentList = new React.createClass({
  displayName: 'CommentList',
  mixins: [PureRenderMixin],

  propTypes: {
    comments: ImmutablePropTypes.list,
  },

  render(){
    console.log(`this.props.comments ${this.props.comments}`);
    let commentNodes = this.props.comments.reverse().map((comment, index) => {
      return (
        <Comment author={comment.get('author')} text={comment.get('text')} key={index} />
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
