import React from 'react';

class DigitalClicker extends React.Component {

  constructor(){
    super();
    this.state = {
      timesClicked: 0
    };
  }

  clicked = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render(){
    return(
      <div className="digital-clicker">
        <button onClick={this.clicked}>{this.state.timesClicked}</button>
      </div>
    );
  }
};

export default DigitalClicker;
