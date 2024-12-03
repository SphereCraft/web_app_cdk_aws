#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WebAppCdkAwsStack } from '../lib/web_app_cdk_aws-stack';
import { VPCStack } from '../lib/vpc';

const app = new cdk.App();

// Instantiate VPC Stack 
const vpcStack = new VPCStack(app, 'VPCStack');

new WebAppCdkAwsStack(app, 'WebAppCdkAwsStack', {
});
