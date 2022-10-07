FROM node:16-bullseye

ARG UNAME=node
ARG UID=1000
ARG GID=1000

RUN if grep -q $GID /etc/group; then GROUP_NAME=$(grep :$GID: /etc/group | sed -En "s/(.*):x:$GID:/\1/p") && if [ "$GROUP_NAME" != "$UNAME" ]; then delgroup $GROUP_NAME; fi; fi;
RUN if grep -q $UNAME /etc/group; then groupmod -g $GID $UNAME; else groupadd -g $GID $UNAME; fi;
RUN usermod -u $UID $UNAME

ARG PORT
ARG ENV

ENV NODE_ENV $ENV
EXPOSE 8080

WORKDIR "/src/app"