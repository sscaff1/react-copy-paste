import React from 'react';
import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import CopyContainer from './components/copy-container.jsx';
import {TextCopies} from '/lib/collections'

function composer(props,onData) {
  const handle = Meteor.subscribe('textCopies');
  const currentUser = Meteor.userId()
  if (handle.ready()) {
    const textCopies = TextCopies.find().fetch();
    onData(null, {textCopies, currentUser});
  } else {
    onData(null, {textCopies: false, currentUser});
  }
}

const NoUser = () => (
  <h2 className="text-center">You must Login to use the app.</h2>
);

const AddAnother = ({handleClick}) => (
  <button className="btn btn-primary" onClick={handleClick}>
    Add Another Container
  </button>
);

class App extends React.Component {
  handleClick(event) {
    event.preventDefault();
    Meteor.call('saveCopies', values);
  }

  colorChange(rowId) {
    Meteor.call('changeColor', rowId);
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
                handelChange={this.colorChange.bind(this)}
                handleDelete={this.handleDelete.bind(this)} />)) : ""}
            <div className="row">
              <div className="col-xs-12 text-center">
                <AddAnother handleClick={this.handleClick.bind(this)} />
              </div>
            </div>
          </div>
        ) : <NoUser />}
      </div>
    )
  }
}

export default composeWithTracker(composer)(App);
