var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");

var PostList = require("./components/post_list.jsx");
var PostShow = require("./components/post_show.jsx");

<<<<<<< HEAD
// window.initializeApp = function () {


  $(document).ready(function (e) {
    ReactDOM.render(
      <PostList />,
      $("main")[0]
    );
  });

// };
=======
window.initializeApp = function () {
  ReactDOM.render(
    <PostList />,
    $("main")[0]
  );
};
>>>>>>> 5015e9c4d3dbd8701cd87c34a90fec5aa5377a03
