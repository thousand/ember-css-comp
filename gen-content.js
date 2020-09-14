const Proliferation = require('proliferate');

const COUNT = 1000;

const cssBlocksConfig = require('./proliferations/css-blocks');
const cssBlocksProliferation = new Proliferation(Object.assign({}, cssBlocksConfig, { count: COUNT }));
cssBlocksProliferation.write();

const cssModulesConfig = require('./proliferations/css-modules');
const cssModulesProliferation = new Proliferation(Object.assign({}, cssModulesConfig, { count: COUNT }));
cssModulesProliferation.write();

const plainSassConfig = require('./proliferations/plain-scss');
const plainSassProliferation = new Proliferation(Object.assign({}, plainSassConfig, { count: COUNT }));
plainSassProliferation.write();
