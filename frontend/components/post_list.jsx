var React = require("react");
var PostStore = require("./../stores/post_store.js");

var PostList = React.createClass({

  getInitialState: function () {
    return { posts: [], postsLength: 0 };
  },

  componentDidMount: function () {

    // PostStore.fetch(function (posts) {
    //   debugger;
    // }.bind(this));

    PostStore.addChangeHandler(this.setStateFromStore);
    PostStore.fetch();
  },

// JS REVIEW
// 1) Method style: myObject.myMethod()
    // this is myObject
// 2) Function style: myMethod()
    // this is global object/window or undefined if using strict
// 3) Constructor style: new myClass()
    // this is new, blank object/instance

  componentWillUnmount: function () {
    PostStore.removeChangeHandler(this.setStateFromStore);
  },

  setStateFromStore: function () {
    // HERE is where we want to setState to all the new posts
    this.setState({ posts: PostStore.all(), postsLength: PostStore.all().length });
    // postsLength should NOT be in state. Because you can compute it on the fly
    
  },

  render: function () {

    var postArticles = this.state.posts.map(function (post, i) {
      return (
        <article key={ i }>
          <h3>{ post.title }</h3>
          <footer>{ post.author_name }</footer>
          <p>{ post.body }</p>
        </article>
      );
    });

    if (postArticles.length === 0) {
      postArticles = <p>Loading posts...</p>;
    }

    return (
      <section className="posts">
        <h2>All the Posts!!!!({this.state.postsLength})</h2>
        { postArticles }
      </section>
    );
  }

});

module.exports = PostList;
