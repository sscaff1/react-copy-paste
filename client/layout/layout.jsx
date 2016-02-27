import React from 'react';
import Header from './header.jsx';
import {Footer} from './footer.jsx';

class Layout extends React.Component {
  handleSave(event) {
    event.preventDefault();
    $('[name=copyRow]').each(function(index) {
      let copyObject = {
        title: $(this).find('[name=title]').val(),
        color: $(this).find('[name=color]').val(),
        copyValue: $(this).find('[name=copyValue]').val()
      }
      Meteor.call('updatePage', this.id, copyObject);
    });
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
