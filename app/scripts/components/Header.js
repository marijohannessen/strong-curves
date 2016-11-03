const React = require('react');
import NewEntry from './NewEntry';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  showNewEntry = () => {
    const newEntry = document.querySelector('.new-entry');
    newEntry.classList.toggle('active');
  }

  render() {
    return (
      <header className="header">
        <a href="/" className="header__logo">my<span className="header__logo--light">plan</span></a>
        <button className="header__add-entry" onClick={this.showNewEntry}>+</button>
      </header>
    )
  }
};

export default Header;
