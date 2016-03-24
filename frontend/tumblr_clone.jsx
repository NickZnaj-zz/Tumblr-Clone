var React = require("react");
var ReactDOM = require("react-dom");

var PostList = require("./components/post_list.jsx");

// window.initializeApp = function () {


  $(document).ready(function (e) {
    ReactDOM.render(
      <PostList />,
      $("main")[0]
    );
  });

// };
