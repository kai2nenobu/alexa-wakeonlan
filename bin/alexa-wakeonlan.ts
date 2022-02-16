#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AlexaWakeonlanStack } from '../lib/alexa-wakeonlan-stack';

const app = new cdk.App();
new AlexaWakeonlanStack(app, 'AlexaWakeonlanStack', {
});
