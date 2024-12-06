#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { VPCStack } from '../lib/vpc';
import { EC2Stack } from '../lib/ec2_stack';
import { ALBStack } from '../lib/alb-stack';
import { ASGStack } from '../lib/asg-stack';

const app = new cdk.App();

const vpcStack = new VPCStack(app, 'VPCStack');

const ec2Stack = new EC2Stack(app, 'EC2Stack', {
    vpc: vpcStack.vpc
});

const albStack = new ALBStack(app, 'ALBStack', {
    vpc: vpcStack.vpc,
    targetInstances: [],
});

const asgStack = new ASGStack(app, 'ASGStack', {
    vpc: vpcStack.vpc,
    targetGroup: albStack.targetGroup,
});

