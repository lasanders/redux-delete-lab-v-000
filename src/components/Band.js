import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
    <span>{props.band.bandNAme}</span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
  </div>
    );
  }
};

export default Band;
