import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { VPCStack } from './vpc';

export class WebAppCdkAwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Instantiate the VPC Stack
    const vpcStack = new VPCStack(this, 'VPCStack');

  }
}
