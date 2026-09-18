#!/bin/sh
# Publish committed main to the source repository and the Pages repository.
set -eu

website_repo=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
git -C "$website_repo" push origin main:main
git -C "$website_repo" push github main:main
