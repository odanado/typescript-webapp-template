#!/bin/bash
set -eu

set -a; eval "$(cat .env <(echo) <(declare -x))"; set +a;

exec $@
