import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autosuggest from 'react-autosuggest';

import { fetchVideos } from '../actions';
import { YOUTUBE_API_KEY } from '../constants';
import $ from 'jquery';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  }
  
  onSuggestionsFetchRequested = ({ value }) => {
    var self = this;
    var url = `http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=${value}&key=${YOUTUBE_API_KEY}+"&format=5&alt=json&callback=ekluv?`;
    $.ajax({
      url: url,  
      dataType: 'jsonp',
      success: function(res) {
              var suggestions = res[1].map((data) => data[0]);
                self.setState({
                suggestions: suggestions
              });
          }
      });


  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestionValue = (suggestion) => {
    this.props.fetchVideos(suggestion);
    return suggestion;
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Seach Videos',
      value,
      onChange: this.onChange
    };

    return (
    <div className="search-bar">
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        inputProps={inputProps} />
    </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchVideos, videoSeleted}, dispatch)
// }

export default connect(null, {fetchVideos})(SearchBar)

