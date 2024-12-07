import * as cdk from 'aws-cdk-lib';

export interface S3StackProps extends cdk.StackProps {
    bucketName?: string;
    versioned?: boolean;
    publicReadAccess?: boolean;
};
