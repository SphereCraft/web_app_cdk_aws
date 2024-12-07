import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import { Construct } from 'constructs';
import { ASGStackProps } from './asg-stack-props';

export class ASGStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: ASGStackProps){
        super (scope, id, props);

        const asgSecurityGroup = new ec2.SecurityGroup(this, 'ASGSecurityGroup', {
            vpc: props.vpc,
            allowAllOutbound: true,
            description: 'Security group for the Auto Scaling Group',
        });

        asgSecurityGroup.addIngressRule(
            ec2.Peer.securityGroupId(props.albSecurityGroup.securityGroupId),
            ec2.Port.tcp(80),
            'Allow traffic from the ALB'
        );

        const asg = new autoscaling.AutoScalingGroup(this, 'ASG', {
            vpc: props.vpc,
            instanceType: new ec2.InstanceType('t3.medium'),
            machineImage: ec2.MachineImage.latestAmazonLinux2(),
            minCapacity: 2,
            maxCapacity: 5,
            desiredCapacity: 2,
            vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS },
            securityGroup: asgSecurityGroup,
        });
        
        asg.attachToApplicationTargetGroup(props.targetGroup);

        new cdk.CfnOutput(this, 'ASGName', {
            value: asg.autoScalingGroupName,
            description: 'The Auto SCaling Group Name',
        });
    }
}
