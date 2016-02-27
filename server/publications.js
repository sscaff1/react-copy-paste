import {Meteor} from 'meteor/meteor';
import {TextCopies} from '/lib/collections.js';

Meteor.publish('textCopies', function() {
  if (this.userId) {
    return TextCopies.find({userId: this.userId}, {sort: {created: 1}});
  } else {
    return this.ready();
  }
});
