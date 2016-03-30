'use strict';

import React from 'react';

require('styles//Controls.scss');

class ControlsComponent extends React.Component {

  componentDidMount() {
    this.props.play();
  }

  /*
  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(nextProps);
    console.log('will receive props!');
  }
  */

  renderStopButton() {
    if (this.props.slides.isPlaying) {
      return <button id="stop" onClick={() => this.props.stop()}>Stop</button>
    }

    return <button id="stop" style={{display: 'none'}} onClick={() => this.props.stop()}>Stop</button>

  }

  renderPlayButton() {
    if (this.props.slides.isPlaying) {
      return <button id="play" style={{display: 'none'}} onClick={() => this.props.play()}>Play</button>
    }

    return <button id="play" onClick={() => this.props.play()}>Play</button>
  }

  render() {
    return (
      <div className="controls-component">
          <button id="previous" onClick={() => this.props.previous()}>Previous</button>
          {this.renderStopButton()}
          {this.renderPlayButton()}
          <button id="next" onClick={() => this.props.next()}>Next</button>
      </div>
    );
  }
}

ControlsComponent.displayName = 'ControlsComponent';

ControlsComponent.propTypes = {
  slides :   React.PropTypes.object.isRequired,
  previous : React.PropTypes.func,
  stop :     React.PropTypes.func,
  play :     React.PropTypes.func,
  next :     React.PropTypes.func
};

export default ControlsComponent;
