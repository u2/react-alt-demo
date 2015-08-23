import $ from 'jquery';

const CommentsManager = {
  fetchComments(url){
    return $.ajax({
      url: url,
      dataType: 'json',
    });
  },

  submitComment(url, comment) {
    return $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: {comment: comment},
    });
  },
};

export default CommentsManager;
