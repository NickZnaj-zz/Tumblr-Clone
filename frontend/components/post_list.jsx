var React = require("react");
var PostStore = require("./../stores/post_store.js");

var PostList = React.createClass({
  
  getInitialState: function () {
    return { posts: [] };
  },
  
  componentDidMount: function () {
    // var newPosts = [
    //   {
    //     title: "A post title",
    //     body: "A post body",
    //     author_name: "An author name"
    //   },
    //   {
    //     title: "Another title",
    //     body: "Another body",
    //     author_name: "Another name"
    //   }
    // ];
    //
    // setTimeout(
    //   function () {
    //     this.setState({posts: newPosts});
    //   }.bind(this),
    //   3000
    // );
  },
  
  componentWillUnmount: function () {
    
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
        <h2>All the Posts!!!!</h2>
        { postArticles }
      </section>
    );
  }
  
});

module.exports = PostList;

