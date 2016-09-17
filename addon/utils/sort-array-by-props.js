import Ember from 'ember';

const {
  compare,
  get,
  isEmpty
} = Ember;

export default function sortArrayByProps(array, ...sortProperties) {
  if (isEmpty(sortProperties)) {
    return array;
  }

  const normalizedSort = sortProperties.map(p => {
    let [prop, direction, natural] = p.split(':');
    direction = direction || 'asc';
    natural = natural || false;
    return [prop, direction, natural];
  });

  return array.slice().sort((itemA, itemB) => {
    for (var i = 0; i < normalizedSort.length; ++i) {
      const [prop, direction, natural] = normalizedSort[i];
      let left = get(itemA, prop);
      let right = get(itemB, prop);
      if (natural) {
        left = parseFloat(left, 10);
        right = parseFloat(right, 10);
      }
      const result = compare(left, right);
      if (result !== 0) {
        return (direction === 'desc') ? (-1 * result) : result;
      }
    }
    return 0;
  });
}
