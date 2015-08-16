import $ from 'jquery';
import React from 'react';
import CommentBox from './components/CommentBox';

$(function onLoad() {
  function render() {
    if ($('#content').length > 0) {
      React.render(
        <div>
          <CommentBox url='comments.json'/>

          <div className='container'>
          </div>
        </div>,
        document.getElementById('content')
      );
    }
  }

  render();
});
