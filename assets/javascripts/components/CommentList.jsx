import React from 'react';
import Comment from './Comment';
import ImmutablePropTypes from 'react-immutable-proptypes';
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

const CommentList = new React.createClass({
  displayName: 'CommentList',
  mixins: [PureRenderMixin],

  propTypes: {
    // comments: React.PropTypes.array
    comments: ImmutablePropTypes.list,
  },

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   return this.props.comments !== nextProps.comments;
  // },

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
