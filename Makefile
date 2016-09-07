MODULES = ./node_modules/.bin
WEBPACK = $(MODULES)/webpack
SERVER  = $(MODULES)/webpack-dev-server

help:
	@grep -E '^[a-zA-Z\._-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

bundle: ## bundles source
	$(WEBPACK) --progress --colors

dist: ## creates dist version of bundles
	$(WEBPACK) --progress --colors --dist

develop: ## develop source
	$(SERVER) --progress --colors -d --hot --inline

setup: ## sets up project
	npm install
