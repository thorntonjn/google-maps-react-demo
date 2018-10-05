import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMarkerAction } from './actions/showMarkerAction'
import {MyMapComponent} from './components/myMapComponent'

import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  showMarker: (isMarkerShown) => dispatch(showMarkerAction(isMarkerShown))
});

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.toggleMarker = this.toggleMarker.bind(this);
  }

  render() {
    return (
      <div className="App">
        <MyMapComponent
          isMarkerShown={this.props.mapMarker.isMarkerShown}
          onMarkerClick={this.toggleMarker}
        />
        <button onClick={this.toggleMarker} >Toggle Map Marker</button>
      </div>
    );
  }

  toggleMarker = (event) => {
    this.props.showMarker(!this.props.mapMarker.isMarkerShown);
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
