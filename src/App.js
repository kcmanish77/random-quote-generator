import React, { Component } from 'react';
import * as _ from '../src/store/actions/randomQuote'
import { connect } from 'react-redux';
import './App.css';
import { QuoteBox } from './components/QuoteBox/QuoteBox';
import { Loading } from './components/Loading/Loading';


class App extends Component {
  componentWillMount() {
    this.props.loadQuotes();
  }
  changeQuote = () => {
    this.props.loadQuotes();
  }
  render() {
    let quote = null;

    if (!this.props.random.isLoading) {
      quote = <Loading />;
    }
    else {
      quote = (
        <QuoteBox quote={this.props.random.quotes} change={this.changeQuote} />)
    }
    return (
      <div id="text" className="App">
          {quote}
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    random: state.random
  }
}
const mapDispatchTopProps = dispatch => {
  return {
    loadQuotes: () => dispatch(_.fetchQuotes())
  }
}
export default connect(mapStateToProps, mapDispatchTopProps)(App);
