# Start from the official Jenkins image
FROM jenkins/jenkins:lts

# Switch to the root user to install packages
USER root

# Update and install git
RUN apt-get update && apt-get install -y git

# Switch back to the jenkins user
USER jenkins