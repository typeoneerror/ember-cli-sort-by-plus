(function() {
  /* globals define, naturalSort */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('naturalSort', { 'default': naturalSort });
})();
