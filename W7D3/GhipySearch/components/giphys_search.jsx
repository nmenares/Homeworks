import React from 'react';
import { fetchSearchGiphys } from '../actions/giphy_actions';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchSearchGiphys("");
  }

  handleChange(e){
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleClick(e){
    e.preventDefault();
    let searchTerm = this.state.searchTerm;
    this.props.fetchSearchGiphys(searchTerm);
    this.state = { searchTerm: "" };
  }

  render(){
    return (
      <div>
        <form>
          <input onChange={this.handleChange} value={this.state.searchTerm} placeholder="search..."></input>
          <button onClick={this.handleClick}>Search</button>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    );
  }
}

export default GiphysSearch;
