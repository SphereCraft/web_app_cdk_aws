
# Highly Available Web Application on AWS

## Overview
This project demonstrates the deployment of a highly available and scalable web application using AWS services. It's my first solo project in AWS cloud engineering, showcasing the use of AWS CDK and TypeScript to define infrastructure as code.

## Current Status
- The project has been initialized with AWS CDK.
- Next Steps:
  - Design the architecture. - Done ![architecture](~/Documents/Projects/web_app_cdk_aws/Docs/architecture-description.md) 
  - Implement the VPC stack.

## Objectives
- Create a VPC with public and private subnets across two Availability Zones.
- Set up an Application Load Balancer (ALB) for traffic distribution.
- Deploy EC2 instances in private subnets with Auto Scaling for high availability.
- Host static content in an S3 bucket.

## Technologies
- **AWS CDK** (Infrastructure as Code)
- **TypeScript**
- AWS Services: VPC, EC2, ALB, Auto Scaling, S3

## Getting Started
1. Clone the repository.
2. Initialize the AWS CDK project with:
   ```bash
   cdk init app --language=typescript

