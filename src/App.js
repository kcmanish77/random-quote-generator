import React, { Component } from 'react';
import * as _ from '../src/store/actions/randomQuote'
import  { connect } from 'react-redux';
import classes from  './App.css';
import { QuoteBox } from './components/QuoteBox/QuoteBox';
import { Loading } from './components/Loading/Loading';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quote: [],
    }
  }
  componentDidMount() {
    this.props.loadQuotes();
  }
  changeQuote = () => {
    const item  = [{...this.props.random.quotes[Math.floor(Math.random() * this.props.random.quotes.length)]}];
    this.setState({quote: item})
  }
  getColor = () => {
    let letters = '123456789abcd';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*letters.length)]
    }
    return color;
  }
  render() {
    let onThePage = null;
    const color = this.getColor();
    if (this.props.random.isLoading) {
      onThePage =( <Loading />);
    }
    else {
      onThePage = (
        <QuoteBox
           quote={this.state.quote} 
          firstItem = {[{...this.props.random.quotes[Math.floor(Math.random() * this.props.random.quotes.length)]}]} 
          change={this.changeQuote} 
          color ={color} />)
    }
    return (
      <div id="text"style={{background:`linear-gradient(10deg, yellow, ${color}),red`}} className={classes.App} >
          {onThePage}
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
