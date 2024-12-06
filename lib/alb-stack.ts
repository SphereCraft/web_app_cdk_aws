import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ALBStackProps } from './alb-stack-props';
import { Listener } from 'aws-cdk-lib/aws-globalaccelerator';

export class ALBStack extends cdk.Stack {
    public readonly targetGroup: elbv2.ApplicationTargetGroup;

    constructor(scope: Construct, id: string, props: ALBStackProps){
        super(scope, id, props);

        const alb = new elbv2.ApplicationLoadBalancer(this, 'ApplicationLoadBalancer', {
            vpc: props.vpc,
            internetFacing: true,
        });

        this.targetGroup = new elbv2.ApplicationTargetGroup(this, 'TargetGroup', {
            vpc: props.vpc,
            port: 80,
            targetType: elbv2.TargetType.INSTANCE,
            healthCheck:{ path: '/' },
        });

        const listener = alb.addListener('Listener', {
            port: 80,
        });

        listener.addTargetGroups('DefaultTargetGroup', {
            targetGroups: [this.targetGroup],
        });
        
            
        new cdk.CfnOutput(this, 'ALBDnsName', {
            value: alb.loadBalancerDnsName,
            description: 'The DNS Name for the ALB'
        });
    }
}
