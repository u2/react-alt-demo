import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import CommentStore from '../stores/CommentStore';
import Immutable from 'immutable';
import CommentActions from '../actions/CommentActions';

const CommentBox = React.createClass({
  displayName: "CommentBox",

  getStoreState() {
    return {
      comments: CommentStore.getState().comments,
    };
  },

  propTypes: {
    url: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return this.getStoreState();
  },

  componentDidMount: function() {
    CommentStore.listen(this.onChange);
    CommentActions.fetchComments(this.props.url);
  },

  onChange() {
    this.setState(this.getStoreState());
  },

  render(){
    return (
      <div className='commentBox container'>
        <h1>Comments</h1>
        <CommentForm url={this.props.url} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
})

export default CommentBox;
