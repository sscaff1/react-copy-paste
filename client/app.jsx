import React from 'react';
import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import CopyContainer from './components/copy-container.jsx';
import {TextCopies} from '/lib/collections.js'
import {AddAnother} from './components/buttons.jsx'

function composer(props,onData) {
  const handle = Meteor.subscribe('textCopies');
  const currentUser = Meteor.userId()
  if (handle.ready()) {
    const textCopies = TextCopies.find({userId: currentUser}, {sort: {created: 1}}).fetch();
    onData(null, {textCopies, currentUser});
  } else {
    onData(null, {currentUser});
  }
}

const NoUser = () => (
  <h2 className="text-center">You must Login to use the app.</h2>
);

class App extends React.Component {
  handleClick(event) {
    event.preventDefault();
    Meteor.call('addAnother');
  }

  colorChange(rowId, color) {
    Meteor.call('changeColor', rowId, color);
  }

  handleDelete(rowId) {
    Meteor.call('deleteRow', rowId);
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? (
          <div>
            {this.props.textCopies ? this.props.textCopies.map(copy =>
              (<CopyContainer key={copy._id}
                copyInstance={copy}
                colorChange={this.colorChange}
                handleDelete={this.handleDelete} />)) : ""}
            <div className="row">
              <div className="col-xs-12 text-center">
                <AddAnother handleClick={this.handleClick} />
              </div>
            </div>
          </div>
        ) : <NoUser />}
      </div>
    )
  }
}

export default composeWithTracker(composer)(App);
