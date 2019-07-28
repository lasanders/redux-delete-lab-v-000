import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    delete: bandText => dispatch({type: 'DELETE_BAND', payload: band.Text })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
