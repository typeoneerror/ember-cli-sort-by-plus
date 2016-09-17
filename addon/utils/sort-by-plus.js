import Ember from 'ember';

import sortArrayByProps from './sort-array-by-props';

const {
  computed,
  get,
  makeArray
} = Ember;

export default function sortByPlus(itemsProperty, ...sortProperties) {
  return computed(`${itemsProperty}.[]`, function() {
    const items = makeArray(get(this, itemsProperty));
    return sortArrayByProps(items, ...sortProperties);
  });
}
