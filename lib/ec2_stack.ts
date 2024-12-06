import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cdk from 'aws-cdk-lib';
import { EC2StackProps } from './ec2_stack_props';
import { Construct } from 'constructs';

export class EC2Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: EC2StackProps) {
        super(scope, id, props);

        const ec2Instance = new ec2.Instance(this, 'Ec2Instance', {
            instanceType: new ec2.InstanceType('t3.medium'),
            machineImage: ec2.MachineImage.latestAmazonLinux2(),
            vpc: props.vpc,
            
        });

        new cdk.CfnOutput(this, 'EC2Id', {
            value: ec2Instance.instanceId,
            description: 'The EC2 ID'
        });

        cdk.Tags.of(ec2Instance).add('Name', 'EC2Instance');
    }
}
