CUR_UID := $(shell id -u)
CUR_GID := $(shell id -g)

DOCKER_DIR := docker
DOCKERFILE := docker-compose.yml
DOCKER_SERVICES_BUILD :=

docker_compose := cd ${DOCKER_DIR} && docker-compose -f ${DOCKERFILE}
node_cli := ${docker_compose} run --rm --use-aliases --user node node

first:
	@printf "\e[1;34mDid you read the README file?!?!\e[1;34m\n"
init-project:
	make dist-files build-docker-services
	make exec CMD="yarn install --frozen-lockfile"
dist-files:
	cp ${DOCKER_DIR}/.env.dist ${DOCKER_DIR}/.env \
	&& [ -f ${DOCKER_DIR}/docker-compose.yml ] || cp ${DOCKER_DIR}/docker-compose.yml.dist ${DOCKER_DIR}/docker-compose.yml
build-docker-services:
	${docker_compose} build --build-arg UID=${CUR_UID} --build-arg GID=${CUR_GID} ${DOCKER_SERVICES_BUILD}
exec:
	${node_cli} ${CMD}
start:
	make exec CMD="yarn start"
build:
	make exec CMD="yarn build"
start-devbox:
	${docker_compose} up -d
purge-devbox:
	${docker_compose} down
stop-devbox:
	${docker_compose} down
