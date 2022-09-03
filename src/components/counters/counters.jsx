import React, {Component} from 'react';

import Counter from '../counter';;



class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 2},
      {id: 2, value: 3},
      {id: 3, value: 4},
      {id: 4, value: 5},
      {id: 5, value: 6},
    ]
  }

  handleDelete = (counterId) => {
    console.log(counterId);
    let counters = this.state.counters.filter(counter => counter.id != counterId)
    this.setState({counters})
  }
  render() {
    if(this.state.counters.length === 0) return <p className="fw-bold text-center">No counters</p>
    return (
    <div>
      <button className="btn btn-sm btn-outline-primary m-4">Reset</button>
      {this.state.counters.map(counter => <Counter key={counter.id} id={counter.id} value={counter.value} onHandleDelete={(counterId) => this.handleDelete(counterId)}/>)}
    </div>)
  }
}

export default Counters

