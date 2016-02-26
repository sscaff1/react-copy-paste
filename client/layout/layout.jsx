import React from 'react';
import Header from './header.jsx';
import {Footer} from './footer.jsx';
import {composeWithTracker} from 'react-komposer';

class Layout extends React.Component {
  handleSave(event) {
    event.preventDefault();
    console.log(React.Children);
  }

  render() {
    return (
      <div>
        <Header handleSave={this.handleSave} />
        <div className="container">
          {this.props.content}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout;
