# Inspired by https://postd.cc/auto-documented-makefile/
MAKEFLAGS += --warn-undefined-variables
SHELL = /bin/bash
.SHELLFLAGS = -e -o pipefail -c
.DEFAULT_GOAL = help

export PYTHONPATH = $(CURDIR)/pip

# If SHLVL is empty, use bash in "Git for Windows"
ifeq ($(SHLVL),)
	SHELL = C:\Program Files\Git\bin\bash.exe
endif

# .を含まないターゲットをすべてPHONYターゲットにする
.PHONY: $(shell grep -oE ^[a-zA-Z0-9_-]+: $(MAKEFILE_LIST) | sed 's/://')

help: ## ヘルプメッセージを表示する
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "    \033[36m%-16s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

## Project Tasks

setup: ## 開発環境をセットアップする。リポジトリをクローンしたらまずはじめに1回実行すること。
	npm install

pip/yamllint:
	pip install yamllint -t "$$PYTHONPATH"

lint: lint-yamllint ## Lint all

lint-yamllint: pip/yamllint ## yamllintでYAMLファイルを検証する
	python -m yamllint .
