import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
    tags: ['tag A', 'tag B', 'tag C', 'tag D']
  }   

  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  }

  render() {

    return (
    <div>
      <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
      <div>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </div>
    )
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count 
  }

  getBadgeClasses() {
    let badgeClass = 'badge m-2 badge-'
    badgeClass += this.state.count === 0 ? 'warning' : 'primary';
    return badgeClass
  }
}

export default Counter;