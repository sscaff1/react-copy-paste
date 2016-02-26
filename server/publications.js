import {Meteor} from 'meteor/meteor';
import {TextCopies} from '/lib/collections';

export default function() {
  Meteor.publish('textCopies', () => {
    if (this.userId) {
      return TextCopies.find({userId: this.userId});
    } else {
      return this.ready();
    }
  });
};
