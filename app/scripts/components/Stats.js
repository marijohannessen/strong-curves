const React = require('react');

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const difference = (this.props.weight - this.props.goal);
    return (
      <div className="stats">
        <ul className="stats__list">
          <li className="stats__list-item" id="weight">
            <p className="stats__list-item__value">
              {this.props.weight}<span className="stats__list-item__value--unit">kg</span>
            </p>
            <p className="stats__list-item__label">WEIGHT</p>
          </li>
          <li className="stats__list-item" id="kgs-to-go">
            <p className="stats__list-item__value">
              {difference}<span className="stats__list-item__value--unit">kg</span>
            </p>
            <p className="stats__list-item__label">TO GOAL</p>
          </li>
          <li className="stats__list-item" id="week-number">
            <p className="stats__list-item__value">
              {this.props.weekNumber}
            </p>
            <p className="stats__list-item__label">WEEK</p>
          </li>
        </ul>


        {/*<ul>
          <li>Day One: Workout A</li>
          <li>Day Two: Workout B</li>
          <li>Day Three: Cardio / Active Rest</li>
          <li>Day Four: Workout A</li>
          <li>Day Five: Workout C</li>
          <li>Day Six: Cardio / Active Rest</li>
          <li>Rest</li>
        </ul>

        <ul>
          <li>Glute dominant exercise</li>
          <li>Quad dominant exercise</li>
          <li>Hip gominant, straight-leg hip dominant or hamstring dominant exercise</li>
          <li>Glute accessory exercise</li>
        </ul>

        <ul> Week 1 - 4
          <li>Workout A</li>
          <li>A1 Bodyweight glute bridge</li>
          <li>A2 One-arm row</li>
          <li>B1 Bodyweight box squat</li>
          <li>B2 Dumbbell bench press</li>
          <li>Dumbbell romanian deadlift</li>
          <li>Side lying abduction</li>
          <li>Front plank</li>
          <li>Side plank from knees</li>

          <li>Workout B</li>
        </ul>*/}
      </div>
    )
  }
};

export default Stats;
