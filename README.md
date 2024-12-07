
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

## Conclusion
This project was the first of many that i intend to build, and although this is a relativly simple project, it was a massive
learning curve for me.  
I did use chatGPT to help. Was this a good or bad thing?  
Well even as a very new Cloud Engineer, I found out that AI can actully be more of a hinderance that a help. Ok, yes, chatGPT
helped me with a better understanding for file structure, syntax and even definations of some properties that i wasnt awear off,
but honestly, ChatGPT made things more complicated that it needed to be. I actully ended up just using the documentation the AWS
have to check what ChatGPT was saying. All in all, this was a great starter project for me and one that i can refer to in 
the future to help with other projects. My main take from this, have confidence in what I have learned and use AI in a different way.
