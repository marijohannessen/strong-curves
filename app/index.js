'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Navigation = ReactRouter.Navigation;
const History = ReactRouter.History;
const createBrowserHistory = require('history/lib/createBrowserHistory');

const Rebase = require('re-base');
const base = Rebase.createClass({
  apiKey: "AIzaSyBwKIvr322-Qg3KrhTvokoIzkdu1qPstWk",
  authDomain: "strong-curves.firebaseapp.com",
  databaseURL: "https://strong-curves.firebaseio.com",
  storageBucket: "strong-curves.appspot.com",
  messagingSenderId: "501327582219"
});

require('./scss/main.scss');

import Header from './scripts/components/Header.js';
import Entry from './scripts/components/Entry.js';
import NewEntry from './scripts/components/NewEntry.js';
import PreviousEntries from './scripts/components/PreviousEntries.js';
import Stats from './scripts/components/Stats.js';


// <App />
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {
        weight: '63',
        goal: '60'
      },
      general: {
        weekNumber: '1',
        dayNumber: '1',
      },
      entries: {
        week1: {
          day1: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          },
          day2: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          },
          day3: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          },
          day4: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          }
        },
        week2: {
          day1: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          },
          day2: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          },
          day3: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          },
          day4: {
            workout1: [],
            workout2: [],
            workout3: [],
            workout4: [],
            workout5: [],
            workout6: [],
            workout7: [],
            workout8: []
          }
        }
      }
    }
  }

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'entries',
    });
  }

  saveWorkout = (array) => {
    this.state.entries.week1.day1 = array;
    this.setState({
      entries: this.state.entries
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Stats weight={this.state.stats.weight} goal={this.state.stats.goal} weekNumber={this.state.general.weekNumber}/>
        <PreviousEntries entries={this.state.entries} />
        <NewEntry
          weekNumber={this.state.general.weekNumber}
          dayNumber={this.state.general.dayNumber}
          saveWorkout={this.saveWorkout}
        />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
