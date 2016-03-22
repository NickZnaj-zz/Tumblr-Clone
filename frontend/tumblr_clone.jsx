var React = require("react");
var ReactDOM = require("react-dom");

var PostList = require("./components/post_list.jsx");

$(document).ready(function (e) {
  ReactDOM.render(
    <PostList />,
    $("main")[0]
  )
});