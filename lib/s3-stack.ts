import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { S3StackProps } from './s3-stack-props';

export class S3Stack extends cdk.Stack {
    public readonly bucket: s3.Bucket;

    constructor(scope: Construct, id: string, props: S3StackProps) {
        super(scope, id, props);

        this.bucket = new s3.Bucket(this, 'webAppBucket', {
            bucketName: props.bucketName,
            versioned: props.versioned ?? true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            publicReadAccess: props.publicReadAccess ?? false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        }),

        new cdk.CfnOutput(this, 'BucketName', {
            value: this.bucket.bucketName,
            description: 'The name of the S3 Bucket',
        });
    }
}
