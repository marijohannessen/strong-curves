const React = require('react');

class Set extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let setContainer;
    if (this.props.type === 'seconds') {
      setContainer = (
        <li className="set">
          <h2>Set {this.props.number}</h2>
          <div className="inputs__seconds">
            <p>Seconds</p>
            <div className="inputs">
              <input type="text" ref="weight" />
            </div>
          </div>
        </li>
      )
    } else {
      setContainer = (
        <li className="set">
          <h2>Set {this.props.number}</h2>
          <div className="inputs">
            <div className="inputs__weight">
              <p>Weight</p>
              <input type="text" ref="weight" />
            </div>
            <div className="inputs__reps">
              <p>Reps</p>
              <input type="text" ref="reps" />
            </div>
          </div>
        </li>
      )
    }
    return setContainer;
  }
};

export default Set;
