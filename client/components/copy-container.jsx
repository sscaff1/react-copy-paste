import React from 'react';
import Clipboard from 'clipboard';
import {DeleteButton,CopyButton} from './buttons.jsx';

class CopyContainer extends React.Component {
  handleDelete(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to delete this row?")) {
      this.props.handleDelete(this.props.copyInstance._id);
    }
  }

  handleChange() {
    this.props.colorChange(this.props.copyInstance._id);
  }

  componentDidMount() {
    const clipboard = new Clipboard('.fa.fa-copy');
  }

  render() {
    let copyId = `copyme${this.props.copyInstance._id}`;
    return (
      <div className="row clipboard-row" style={this.state}>
        <div className="col-sm-12">
          <div className="form-group">
            <input className="form-control" defaultValue={this.props.copyInstance.title} placeholder="Enter a title" ref="copyTitle" />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="form-group">
            <textarea className="form-control" rows="5" ref="copyValue" id={copyId} defaultValue={this.props.copyInstance.copyValue} placeholder="I will be copied"></textarea>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <label>Change Background Color</label>
                <select className="form-control" ref="backgroundColor" onChange={this.handleChange.bind(this)}>
                  <option value="white">White</option>
                  <option value="lightGreen">Green</option>
                  <option value="lightBlue">Blue</option>
                  <option value="lightCoral">Red</option>
                  <option value="lightGray">Gray</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 text-center">
              <CopyButton copyId={'#' + copyId} />
            </div>
            <div className="col-sm-6 text-center">
              <DeleteButton handleDelete={this.handleDelete.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default CopyContainer;
