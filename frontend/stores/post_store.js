var _posts = {};

var _callbacks = [];

// Our Store is going to keep track of all the posts we have in _posts
// Interface between backend and React components

var PostStore = {
  // _posts: [],  But then I can do PostStore._posts

  addChangeHandler: function (handler) {
    _callbacks.push(handler);
  },

  removeChangeHandler: function (handler) {
    for (var i = 0; i < _callbacks.length; i++) {
      if (_callbacks[i] === handler) {
        _callbacks.splice(i, 1);
        return;
      }
    }
  },

  changed: function () {
    _callbacks.forEach(function (handler) {
      handler();
    });
  },

  all: function () {
    // return _posts.slice();
  // all the posts! Slice 'em so that component can't modify the store

    var posts = [];
    // Way of iterating through keys of object
    for (var id in _posts) {
      if (_posts.hasOwnProperty(id)) {
        posts.push(_posts[id]);
      }
    }
    return posts;
  },

  find: function (id) {
    return _posts[id];
  },

  fetch: function () {
    $.ajax({
      type: "GET",
      url: "/api/posts",
      dataType: "json",
      success: function (posts) {
        // posts is an array of post objects
        _posts = {}; // reset!
        posts.forEach(function (post) {
          _posts[post.id] = post;
        });
        // Imagine that multiple React components depended on the posts
          // They need to know when the PostStore changes!
          // So they can all register change handlers with the PostStore on ComponentDidMount
          // When the posts are fetched, the PostStore iterates through all the change handlers
            // Says "hey components, I have new posts! Do your thing"
        PostStore.changed();
      },
      error: function () {
        console.log("PostStore#fetch error!");
      }
    });
  }
};

module.exports = PostStore;
