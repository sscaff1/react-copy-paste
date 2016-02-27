import React from 'react';
import ReactDOM from 'react-dom';
import {Blaze} from 'meteor/blaze';
import {composeWithTracker} from 'react-komposer';

function composer(props, onData) {
  const currentUser = Meteor.userId()
  if (currentUser) {
    onData(null, {currentUser: true})
  } else {
    onData(null, {currentUser: false})
  }
}

class AccountsUIWrapper extends React.Component {
  componentDidMount() {
    this.view = Blaze.render(Template._loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return (
      <li ref="container" style={{padding:15}} />
    )
  }
}

const Navbar = ({currentUser, handleSave}) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Copy & Paste</a>
      </div>
      <div className="collapse navbar-collapse" id="main-nav">
        <ul className="nav navbar-nav navbar-left">
          {currentUser ? (<li><a href="#" onClick={handleSave}>Save for Later</a></li>) : ""}
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <AccountsUIWrapper />
        </ul>
      </div>
    </div>
  </nav>
);

const Header = ({handleSave, currentUser}) => (
  <div className="header-container">
    <Navbar currentUser={currentUser} handleSave={handleSave} />
  </div>
);

export default composeWithTracker(composer)(Header);
