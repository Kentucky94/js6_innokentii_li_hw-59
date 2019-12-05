import React, {Component} from 'react';

import './MovieTab.css';

class MovieTab extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.text !== nextProps.text;
  }

  componentDidUpdate() {
    console.log('[Post] DidUpdate');
  }

  render() {
    return (
      <div className='task_tab'>
        <input type="text" value={this.props.text} onChange={this.props.editText}/>
        <button className='task_btn' onClick={this.props.delete}>Delete</button>
      </div>
    );
  }
}

export default MovieTab;