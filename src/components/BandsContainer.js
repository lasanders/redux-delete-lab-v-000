import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(todo => <Band delete={this.props.delete} key={band.id} todo={band} />)
  }

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    );
  }
};

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    delete: bandText => dispatch({type: 'DELETE_BAND', payload: band.Text })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
