# chrisrea.ms

export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0

heroku container:login
heroku container:push web
heroku container:release web
