import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

// Making the VPC available from all files
export class VPCStack extends cdk.Stack {
    public readonly vpc: ec2.Vpc;

    // calling the constructor
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create 2 AZ's with a public and private subnet in each
        this.vpc = new ec2.Vpc(this, 'WebAppVpc', {
            maxAzs: 2, // Limits the AZ's to max 2 
            subnetConfiguration: [
                {
                    subnetType: ec2.SubnetType.PUBLIC, // Public subnets for ALB and NAT Gateway
                        name: 'PublicSubnet',
                    cidrMask: 24,
                },
                {
                    subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS, // Private subnets
                    name: 'PrivateSubnet',
                    cidrMask: 24,
                },
            ],
        });

        new cdk.CfnOutput(this, 'VpcId', {
            value: this.vpc.vpcId,
            description: 'The VPC ID'
        });
    }
}
