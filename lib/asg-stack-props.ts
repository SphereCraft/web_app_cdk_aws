import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';

export interface ASGStackProps extends cdk.StackProps {
    vpc: ec2.Vpc
    targetGroup: elbv2.ApplicationTargetGroup;
}
