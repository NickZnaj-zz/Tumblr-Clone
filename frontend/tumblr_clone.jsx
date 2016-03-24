var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");

var PostList = require("./components/post_list.jsx");
var PostShow = require("./components/post_show.jsx");

window.initializeApp = function () {
  ReactDOM.render(
    <PostList />,
    $("main")[0]
  );
};
