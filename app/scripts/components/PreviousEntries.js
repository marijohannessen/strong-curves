const React = require('react');
import Entry from './Entry.js';

class PreviousEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEntries = (key, i) => {
    const weekNumber = i + 1;
    const weekStats = this.props.entries[key];
    const isEmpty = (weekStats.day1.workout1.length === 0);
    const classNames = isEmpty ? "prev-entries-list__item empty" : "prev-entries-list__item";
    return (
      <li key={key} className={classNames}>
        <h1>Week {weekNumber}</h1>
        {Object.keys(weekStats).map((k, a) => {
          const currentObj = weekStats[k];
          const isEmpty = (weekStats[k].workout1.length === 0);
          const classNames = isEmpty ? "day-entry empty" : "day-entry";
          const amount = ['1', '2', '3', '4', '5', '6', '7', '8'];
          return (
            <div key={k} className={classNames}>
              <h2>Day {a+1}</h2>
              <ul className="prev-entries-workouts">
                {Object.keys(currentObj).map((b, d) => {
                  const statArray = currentObj[b];
                  return (
                    <li key={b}>
                      <h3>Workout {d+1}</h3>
                      <div>
                        <p>Weight: {statArray[0]}</p>
                        <p>Reps: {statArray[1]}</p>
                      </div>
                    </li>
                  )
                  })
                }
              </ul>
            </div>
          )
        })}
      </li>
    )
  }

  render() {
    if (this.props.entries.week1.day1.workout1.length === 0) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="prev-entries">
          <h2>Previous Entries</h2>
          <ul className="prev-entries-list">
            {Object.keys(this.props.entries).map((key, i) => {
              return this.renderEntries(key, i)
            })}
          </ul>
        </div>
      )  
    }
  }
};

export default PreviousEntries;
