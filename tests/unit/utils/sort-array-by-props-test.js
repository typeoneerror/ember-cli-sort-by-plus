import Ember from 'ember';
import sortArrayByProps from 'dummy/utils/sort-array-by-props';
import { module, test } from 'qunit';

module('Unit | Utility | sort array by props');

// IDs as strings because that's how Ember Data rolls
var array = Ember.A([
  { id: "1",  position: 0, name: "ABC" },
  { id: "2",  position: 1, name: "DEF" },
  { id: "10", position: 0, name: "GHI" }
]);

test('it returns original array if sort properties are not provided', function(assert) {
  let result = sortArrayByProps(array);
  assert.deepEqual(result, array);
});

test('it sorts the results alphabetically', function(assert) {
  let result = sortArrayByProps(array, 'id:asc');
  assert.deepEqual(result, [
    { id: "1",  position: 0, name: "ABC" },
    { id: "10", position: 0, name: "GHI" },
    { id: "2",  position: 1, name: "DEF" }
  ]);
});

test('it sorts the array naturally', function(assert) {
  let result = sortArrayByProps(array, 'id:asc:natural');
  assert.deepEqual(result, [
    { id: "1",  position: 0, name: "ABC" },
    { id: "2",  position: 1, name: "DEF" },
    { id: "10", position: 0, name: "GHI" }
  ]);
});

test('it sorts on multiple properties', function(assert) {
  let result = sortArrayByProps(array, 'position:desc', 'name:desc');
  assert.deepEqual(result, [
    { id: "2",  position: 1, name: "DEF" },
    { id: "10", position: 0, name: "GHI" },
    { id: "1",  position: 0, name: "ABC" }
  ]);
});
