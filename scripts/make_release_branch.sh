#!/usr/bin/env bash

HEAD_BRANCH="$1"
RELEASE_VERSION="$2"

BRANCH_NAME="release-v$RELEASE_VERSION"

# first, checkout a new release branch

git checkout "$HEAD_BRANCH"
git checkout -b "$BRANCH_NAME"

#nvm use
#yarn version --new-version "$RELEASE_VERSION" --no-git-tag-version

git push -u origin "$BRANCH_NAME"