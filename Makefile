args = `arg="$(filter-out $(firstword $(MAKECMDGOALS)),$(MAKECMDGOALS))" && echo $${arg:-${1}}`

green  = $(shell printf "\e[32;01m$1\e[0m")
yellow = $(shell printf "\e[33;01m$1\e[0m")
red    = $(shell printf "\e[33;31m$1\e[0m")

format = $(shell printf "%-40s %s" "$(call green,make $1)" $2)

comma:= ,

.DEFAULT_GOAL:=help

%:
	@:

help:
	@echo ""
	@echo "$(call yellow,Use the following commands:)"
	@echo "$(call red,===============================)"
	@echo "$(call format,serve,'serve app')"
	@echo "$(call format,build,'Build app')"
	@echo "$(call format,next-start,'Start Next js')"

serve: ## Serve app
	##npx nx serve dk-dev
	npx nx run dk-dev:serve
.PHONY: serve

build: ## Build app
	##npx nx build dk-dev
	npx nx run dk-dev:build --configuration=production
.PHONY: build

next-start: ## Next start
	##npx nx start my-new-app
	npx nx run my-new-app:start
.PHONY: next-start
