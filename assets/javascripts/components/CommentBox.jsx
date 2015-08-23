import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import CommentStore from '../stores/CommentStore';
import Immutable from 'immutable';

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
    return {
              comments: Immutable.List.of(
                          {author: 'Pete Hunt', text: 'Hey there!'},
                          {author: 'Justin Gordon', text: 'Aloha from @railsonmaui'}
                        )
           };
  },

  componentDidMount: function() {
    CommentStore.listen(this.onChange);
  },

  onChange() {
    this.setState(this.getStoreState());
  },

  render(){
    console.log(this.state.comments.constructor);
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
