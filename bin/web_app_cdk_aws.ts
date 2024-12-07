#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { VPCStack } from '../lib/vpc';
import { ALBStack } from '../lib/alb-stack';
import { ASGStack } from '../lib/asg-stack';
import { S3Stack } from '../lib/s3-stack';
import { S3StackProps } from '../lib/s3-stack-props';

const app = new cdk.App();

const vpcStack = new VPCStack(app, 'VPCStack');

const albStack = new ALBStack(app, 'ALBStack', {
    vpc: vpcStack.vpc,
});

new ASGStack(app, 'ASGStack', {
    vpc: vpcStack.vpc,
    albSecurityGroup: albStack.albSecurityGroup,
    targetGroup: albStack.targetGroup,
});


const s3StackProps: S3StackProps = {
    bucketName: 'my-web-app-s3-bucket-name', // define unique s3 bucket name here
    versioned: true,
    publicReadAccess: false,
};

new S3Stack(app, 'S3Stack', s3StackProps);
