#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { VPCStack } from '../lib/vpc';
import { EC2Stack } from '../lib/ec2_stack';
import { ALBStack } from '../lib/alb-stack';
import { ASGStack } from '../lib/asg-stack';

const app = new cdk.App();

const vpcStack = new VPCStack(app, 'VPCStack');

const albStack = new ALBStack(app, 'ALBStack', {
    vpc: vpcStack.vpc,
});

new ASGStack(app, 'ASGStack', {
    vpc: vpcStack.vpc,
    albSecurityGroup: albStack.albSecurityGroup,
    targetGroup: albStack.targetGroup,
})
