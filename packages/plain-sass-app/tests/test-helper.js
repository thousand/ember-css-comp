import Application from 'plain-sass-app/app';
import config from 'plain-sass-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
