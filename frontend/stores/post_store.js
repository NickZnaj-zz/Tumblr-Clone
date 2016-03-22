var _posts = {};

var _callbacks = [];

var PostStore = {
  addChangeHandler: function () {

  },
  
  removeChangeHandler: function () {

  },
  
  changed: function () {

  },
  
  all: function () {

  },
  
  fetch: function () {
    $.ajax({
      type: "XXXX",
      url: "XXXXX",
      dataType: "XXXX",
      success: function () {
        
      },
      error: function () {
        console.log("PostStore#fetch error!");
      }
    });
  }
};

module.exports = PostStore;