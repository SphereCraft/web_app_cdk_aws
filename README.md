
# Highly Available Web Application on AWS

## Overview
This project demonstrates the deployment of a highly available and scalable web application using AWS services. It's my first solo project in AWS cloud engineering, showcasing the use of AWS CDK and TypeScript to define infrastructure as code.

## Current Status
- The project has been initialized with AWS CDK.
- Next Steps:
  - Design the architecture. - Done 
  - Implement the VPC stack. - Done
  - Add EC2 Stack Properties - Done
  - Add EC2 Instance file    - Done
  - Implement ASG            - Done
  - Implement Security Group
  - Implement ALB            - Done
  - Add S3 Bucket 

## Objectives
- Create a VPC with public and private subnets across two Availability Zones.
- Set up an Application Load Balancer (ALB) for traffic distribution.
- Deploy EC2 instances in private subnets with Auto Scaling for high availability.
- Host static content in an S3 bucket.

## Technologies
- **AWS CDK** (Infrastructure as Code)
- **Typescript**
- AWS Services: VPC, EC2, ALB, Auto Scaling, S3

## Progress
- Creating modular files for simple and re useable file system
- Created VPC file and export for use throughout the project
- Created separate EC2 Stack props file for re usability
- Created EC2 file for a standard t3.medium (can change after discussions with client)
- Created ASG and ALB, this took sometime to work out, but the logic is there and understood.

