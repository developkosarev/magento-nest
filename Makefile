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
	@echo "$(call format,cron-serve,'Serve cron app')"
	@echo "$(call format,cron-build,'Build cron app')"
	@echo "$(call format,cron-lint, 'Lint cron app')"
	@echo "$(call red,===============================)"
	@echo "$(call format,next-start,'Start Next js')"

## NEST https://nx.dev/nx-api/nest/documents/overview
cron-serve: ## Serve cron app
	##npx nx serve cron
	npx nx run cron:serve
.PHONY: cron-serve

cron-build: ## Build cron app
	##npx nx build cron
	npx nx run cron:build --configuration=production
.PHONY: cron-build

cron-lint: ## Lint cron app
	npx nx lint cron
.PHONY: cron-lint

cron-test: ## Test cron app
	npx nx test cron
.PHONY: cron-test

## NEXT https://nx.dev/nx-api/next
next-start: ## Next start
	##npx nx start my-new-app
	npx nx run my-new-app:start
.PHONY: next-start
