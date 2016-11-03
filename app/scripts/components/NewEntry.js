const React = require('react');
import Entry from './Entry';
import Set from './Set';

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  saveWorkout = (evt) => {
    const btn = evt.currentTarget;
    const container = btn.parentElement.parentElement;
    const workouts = [... container.querySelectorAll('.workout-tracker__workout')];
    let workoutObj = {
      workout1: [],
      workout2: [],
      workout3: [],
      workout4: [],
      workout5: [],
      workout6: [],
      workout7: [],
      workout8: []
    };
    Object.keys(workoutObj).map((key, i) => {
      const sets = [... workouts[i].querySelectorAll('input')];
      let setsArray = [];
      sets.forEach(set => {
        setsArray.push(set.value);
      });
      workoutObj[key] = setsArray;
    })
    this.props.saveWorkout(workoutObj);
  };

  renderWorkoutTracker = (type) => {

    if (type === 'Workout A') {
      return (
        <ul className="workout-tracker">
          <p className="workout-tracker__info">Perform one set of A1 then immediately follow it with one set of A2. Rest 30-90 seconds, and repeat until all sets are completed. Do the same for B1 and B2.</p>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">A1: Bodyweight glute bridge</h1>
            <div className="sets-reps">
              <p>3 sets</p>
              <p>10-20 reps</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" />
              <Set number="2" />
              <Set number="3" />
            </ul>
          </li>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">A2: One arm dumbbell row</h1>
            <div className="sets-reps">
              <p>3 sets</p>
              <p>8-12 reps</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" />
              <Set number="2" />
              <Set number="3" />
            </ul>
          </li>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">B1: Bodyweight box squat</h1>
            <div className="sets-reps">
              <p>3 sets</p>
              <p>10-20 reps</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" />
              <Set number="2" />
              <Set number="3" />
            </ul>
          </li>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">B2: Dumbbell bench press</h1>
            <div className="sets-reps">
              <p>3 sets</p>
              <p>8-12 reps</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" />
              <Set number="2" />
              <Set number="3" />
            </ul>
          </li>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">Dumbbell Romanian deadlift</h1>
            <div className="sets-reps">
              <p>3 sets</p>
              <p>10-20 reps</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" />
              <Set number="2" />
              <Set number="3" />
            </ul>
          </li>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">Side lying abduction</h1>
            <div className="sets-reps">
              <p>1 set</p>
              <p>15-30 reps</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" />
            </ul>
          </li>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">Front plank</h1>
            <div className="sets-reps">
              <p>1 set</p>
              <p>20-120 seconds</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" type="seconds" />
            </ul>
          </li>
          <li className="workout-tracker__workout">
            <h1 className="workout__name">Side plank from knees</h1>
            <div className="sets-reps">
              <p>1 set</p>
              <p>20-60 seconds</p>
            </div>
            <ul className="sets-tracker">
              <Set number="1" type="seconds" />
            </ul>
          </li>
          <li className="workout-tracker__submit">
            <button onClick={this.saveWorkout} type="submit">Save Workout</button>
          </li>
        </ul>
      );
    }

  }

  render() {
    let workoutType;
    if (this.props.dayNumber === '1' || this.props.dayNumber === '4') {
      workoutType = 'Workout A';
    } else if (this.props.dayNumber === '2') {
      workoutType = 'Workout B';
    } else if (this.props.dayNumber === '3' || this.props.dayNumber === '6') {
      workoutType = 'Active Rest';
    } else if (this.props.dayNumber === '5') {
      workoutType = 'Workout C';
    } else {
      workoutType = 'Rest';
    }

    const workoutTracker = this.renderWorkoutTracker(workoutType);

    return (
      <div className="new-entry">
        <h1 className="new-entry__heading">New Entry</h1>
        <div className="new-entry__header">
          <h2 className="new-entry__week">Week {this.props.weekNumber}</h2>
          <h2 className="new-entry__day">Day {this.props.dayNumber}</h2>
          <h2 className="new-entry__workout">{workoutType}</h2>
        </div>
        {workoutTracker}
      </div>
    )
  }
};

export default NewEntry;
