const Proliferation = require('proliferate');

const cssBlocksProliferation = new Proliferation(require('./proliferations/css-blocks'));
cssBlocksProliferation.write();

const cssModulesProliferation = new Proliferation(require('./proliferations/css-modules'));
cssModulesProliferation.write();
