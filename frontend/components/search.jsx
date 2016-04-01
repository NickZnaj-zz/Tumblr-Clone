var React = require("react");
var SearchResultsStore = require("./../stores/search_results_store");
var ApiUtil = require('../utils/api_util');

var Search = React.createClass({
  
  getInitialState: function () {
    return { query: "" };
  },
  
  componentDidMount: function () {
    this.storeListener = SearchResultsStore.addListener(
      this._onChange
    );
  },
  
  componentWillUnmount: function () {
    this.storeListener.remove();
  },
  
  _onChange: function () {
    this.setState({results: SearchResultsStore.all()});
  },
  
  handleInputChange: function (e) {
    var query = e.currentTarget.value;
    this.setState({ query: query }, function () {      
      if (query.length > 2) {
        this.search();
      }
    }.bind(this));
  },
  
  search: function (e) {
    ApiUtil.search(this.state.query, 1);
  },
  
  nextPage: function () {
    var meta = SearchResultsStore.meta();
    ApiUtil.search(meta.query, meta.page + 1);
  },
  
  resultLis: function () {
    return SearchResultsStore.all().map(function (result) {
      if (result._type === "Post") {
        return (
          <li key={ result.id }>
            Post #{ result.id }: { result.title }
          </li>
        );  
        
      } else {
        return (
          <li key={ result.id }>
            Author #{ result.id }: { result.name }
          </li>
        );  
      }
    });
  },
  
  render: function () { 
    var meta = SearchResultsStore.meta();
    return (
      <article>
        <input type="text" onChange={ this.handleInputChange } />
        <button onClick={ this.search }>GO</button>
        
        <nav>
          Displaying page { meta.page } of { meta.total_pages }
          <button onClick={ this.nextPage }>NEXT PAGE</button>
        </nav>
      
        <ul>
          { this.resultLis() }
        </ul>
      </article>
    );
  }
  
});

module.exports = Search;