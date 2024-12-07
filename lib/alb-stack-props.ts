import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface ALBStackProps extends cdk.StackProps {
    vpc: ec2.Vpc;
}
