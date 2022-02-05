'use strict';
const { test } = require('uvu');
const assert = require('uvu/assert');
const { name } = require('../../package.json');
const plugin = require('..');

test('should use the postcss plugin api', () => {
  assert.is(plugin().postcssPlugin, name);
});
test.run();
