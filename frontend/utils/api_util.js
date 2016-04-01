var AppDispatcher = require('../dispatcher/app_dispatcher');
var PostActions = require('../actions/post_actions');
var SearchResultActions = require('./../actions/search_result_actions');

var ApiUtil = {
  
  fetchPosts: function () {
    $.ajax({
      type: "GET",
      url: "/api/posts",
      dataType: "json",
      success: function (posts) {
        PostActions.postsReceived(posts);
      },
      error: function () {
        console.log("Api#fetch error!");
      }
    });
  },
  
  search: function (query, page) {
    $.ajax({
      type: "GET",
      url: "/api/searches",
      dataType: "json",
      data: {query: query, page: page},
      success: function (response) {
        SearchResultActions.receiveResults(response);
      },
      error: function () {
        console.log("ApiUtil#search error!");
      }
      
    });
  }
  
};

module.exports = ApiUtil;
