import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentBox = React.createClass({
  displayName: "CommentBox",

  getInitialState() {
    return {
              comments: [
                          {author: 'Pete Hunt', text: 'Hey there!'},
                          {author: 'Justin Gordon', text: 'Aloha from @railsonmaui'}
                        ]
           };
  },

  render(){
    return (
      <div className='commentBox container'>
        <h1>Comments</h1>
        <CommentForm />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
})

export default CommentBox;
