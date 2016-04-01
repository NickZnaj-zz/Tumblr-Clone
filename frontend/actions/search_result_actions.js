var AppDispatcher = require('../dispatcher/app_dispatcher');
var SearchResultConstants = require('../constants/search_result_constants');

var SearchResultActions = {
  receiveResults: function (response) {
    var action = {
      actionType: SearchResultConstants.SEARCH_RESULTS_RECEIVED,
      searchResults: response.search_results,
      meta: response.meta
    };
    AppDispatcher.dispatch(action);
  }
};

module.exports = SearchResultActions;
