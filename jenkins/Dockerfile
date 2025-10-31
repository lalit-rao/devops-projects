# Start from the official Jenkins image
FROM jenkins/jenkins:lts

# Switch to the root user to install packages
USER root

# Install Git (already here)
RUN apt-get update && apt-get install -y git

# --- Install Docker CLI (New Steps) ---

# 1. Add Docker's official GPG key
RUN apt-get update && apt-get install -y ca-certificates curl
RUN install -m 0755 -d /etc/apt/keyrings
RUN curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
RUN chmod a+r /etc/apt/keyrings/docker.asc

# 2. Add the repository to Apt sources
RUN echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null
RUN apt-get update

# 3. Install the Docker CLI
RUN apt-get install -y docker-ce-cli

# --- End of New Steps ---

# Switch back to the jenkins user
USER jenkins