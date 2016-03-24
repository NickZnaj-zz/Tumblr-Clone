var AppDispatcher = require('../dispatcher/app_dispatcher');
var PostActions = require('../actions/post_actions');

var ApiUtil = {
  fetchPosts: function () {
    $.ajax({
      type: "GET",
      url: "/api/posts",
      dataType: "json",
      success: function (posts) {
        PostActions.postsReceived(posts);
        // AppDispatcher.dispatch({
        //   actionType: "POSTS_RECEIVED",
        //   posts: posts
        // });
      },
      error: function () {
        console.log("Api#fetch error!");
      }
    });
  }
};

module.exports = ApiUtil;
