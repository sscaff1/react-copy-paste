import {Meteor} from 'meteor/meteor';
import {TextCopies} from './collections.js';

Meteor.methods({
  addAnother() {
    TextCopies.insert({
      userId: this.userId,
      title: '',
      copyValue: '',
      color: 'white',
      created: new Date().getTime()
    });
  },
  deleteRow(rowId) {
    TextCopies.remove({_id: rowId});
  },
  changeColor(rowId, color) {
    TextCopies.update({_id: rowId}, {$set: {color: color}});
  },
  updatePage(rowId, copyObject) {
    TextCopies.update({_id: rowId}, {$set: copyObject});
  }
});
