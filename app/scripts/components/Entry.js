const React = require('react');

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry">
        <ul className="entry__list">
          <li className="entry__list-item" id="date">10.28.16</li>
          <li className="entry__list-item" id="day">DAY 1</li>
          <li className="entry__list-item" id="week-number">WEEK 1</li>
          <li className="entry__list-item" id="week-number">WORKOUT A</li>
        </ul>
      </div>
    )
  }
};

export default Entry;
