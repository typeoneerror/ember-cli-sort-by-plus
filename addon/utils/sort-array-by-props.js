import Ember from 'ember';

const {
  compare,
  get
} = Ember;

export default function sortArrayByProps(array, ...sortProperties) {
  const normalizedSort = sortProperties.map(p => {
    let [prop, direction, numeric] = p.split(':');
    direction = direction || 'asc';
    numeric = numeric || false;
    return [prop, direction, numeric];
  });

  return array.slice().sort((itemA, itemB) => {
    for (var i = 0; i < normalizedSort.length; ++i) {
      const [prop, direction, numeric] = normalizedSort[i];
      let left = get(itemA, prop);
      let right = get(itemB, prop);
      if (numeric) {
        left = parseInt(left, 10);
        right = parseInt(right, 10);
      }
      const result = compare(left, right);
      if (result !== 0) {
        return (direction === 'desc') ? (-1 * result) : result;
      }
    }
    return 0;
  });
}
