import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: this.props.value,
  }   

  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  }

  render() {
    console.log(this.props)

    return (
    <div>
      <span onClick={this.decreaseCount} style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={() => this.increaseCount('Hi')} className="btn btn-secondary btn-sm">Increment</button>
      <button onClick={this.props.onHandleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
    </div>
    )
  }

  increaseCount = (data) => {
    console.log(data)
    this.setState({count: this.state.count + 1})
  }

  decreaseCount = () => {
    this.setState({count: this.state.count - 1})
  }
  formatCount() {
    const { count } = this.state
    return count <= 0 ? 'Zero' : count 
  }

  getBadgeClasses() {
    let badgeClass = 'badge m-2 badge-'
    badgeClass += this.state.count <= 0 ? 'warning' : 'primary';
    return badgeClass
  }
}

export default Counter;