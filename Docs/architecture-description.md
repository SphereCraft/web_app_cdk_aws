
# Architecture Overview

This architecture represents a highly available web application deployed on AWS. It uses a **VPC** with two **Availability Zones (AZs)** to ensure redundancy and fault tolerance. The main components of the architecture include:

- **Application Load Balancer (ALB)**: Distributes incoming traffic across EC2 instances in private subnets.
- **EC2 Instances**: Running the web application in private subnets, auto-scaled based on traffic.
- **VPC**: Contains two public and two private subnets across two Availability Zones for high availability.
- **NAT Gateway**: Provides internet access to EC2 instances in private subnets.
- **Security Groups**: Configured to control traffic flow and ensure secure communication between components.

## Diagram
![Architecture Diagram](./docs/architecture-diagram.png)

This setup ensures high availability, scalability, and security for the web application.
