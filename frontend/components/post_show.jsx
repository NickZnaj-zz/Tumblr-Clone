var React = require("react");
var PostStore = require("./../stores/post_store.js");
var AppDispatcher = require('../dispatcher/app_dispatcher');
var ApiUtil = require('../utils/api_util');

var PostShow = React.createClass({
  
  getInitialState: function () {
    return { post: null };
  },
  
  componentDidMount: function () {
    this.postStoreToken = PostStore.addListener(
      this.setStateFromStore
    ); 
    ApiUtil.fetchPosts();
  },

  componentWillUnmount: function () {
    this.postStoreToken.remove();
  },
  
  setStateFromStore: function () {
    this.setState({ post: PostStore.find(this.props.id) })
  },
  
  componentWillReceiveProps: function () {
    
  },
  
  render: function () {
    if (!this.state.post) {
      return <p>Loading the post...</p>;
    }
    
    return (
      <article>
        <h2>{ this.state.post.title }</h2>
        <p>{ this.state.post.body }</p>
      </article>
    );
  }
});

module.exports = PostShow;