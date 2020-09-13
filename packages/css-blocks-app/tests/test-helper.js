import Application from 'css-blocks-app/app';
import config from 'css-blocks-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
