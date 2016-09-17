# ember-cli-sort-by-plus

This is my first Ember CLI addon. Created as a learning experiment so not sure how useful it will be to you. Feel free to provide feedback though!

## TODO

- [ ] Computed properties watched should be more than `items.[]`
- [ ] Better tests, computed prop tests
- [ ] Proper Docs
- [x] Release

## Usage

The sort-by-plus add-on exposes a `sortByPlus` computed property which allows you to sort arrays
similary to the `sort` computed property, but adds support for natural sorting without a custom
sort function (for cases like Ember Data when IDs are strings). You also don't have to define the sort properties as a different property on your object.

```javascript
import Ember from 'ember';
import sortByPlus from 'ember-cli-sort-by-plus';

const { computed: { sort }} = Ember;

var Thing = Ember.Object.extend({
  plusSort: sortByPlus('model', 'position:desc:natural', 'id:asc:natural'),

  modelSortProperties: ['position:desc', 'id:asc'],
  tradSort: sort('model', 'modelSortProperties')
});

var thing = Thing.create({
  model: [
    { id: "1", position: 1 }
    { id: "2", position: 0 },
    { id: "10", position: 0 }
  ]
});

thing.get('plusSort').mapBy('id')   // => ["1", "2", "10"]
thing.get('tradSort').mapBy('id')   // => ["1", "10", "2"]
```

## Installation

    ember install ember-cli-sort-by-helpers

## Development

* `git clone <repository-url>` this repository
* `cd ember-cli-sort-by-plus`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
