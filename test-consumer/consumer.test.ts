import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

import deps from '@node-3d/deps-qmlui';

const require = createRequire(import.meta.url);
const consumer = require('./build/Release/consumer.node') as { probe: () => boolean };

test('links and loads the QmlUi candidate and its Qt dependency chain', () => {
	assert.equal(typeof deps.core.bin, 'string');
	assert.equal(typeof deps.gui.bin, 'string');
	assert.equal(typeof deps.qml.bin, 'string');
	assert.equal(consumer.probe(), true);
});
