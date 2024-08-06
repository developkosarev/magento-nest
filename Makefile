DOCKER_COMPOSE_DEV = docker compose -f compose.dev.yml

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
	@echo "$(call format,cron-test, 'Test cron app')"
	@echo "$(call format,cron-test-e2e, 'Test cron e2e app, before: make cron-serve')"
	@echo "$(call red,===============================)"
	@echo "$(call format,web-next-start,'Start Next js')"
	@echo "$(call format,web-next-build,'Build Next js')"
	@echo "$(call red,===============================)"
	@echo "$(call format,docker-start,'Start docker compose dev')"
	@echo "$(call format,docker-stop,'Stop docker compose dev')"
	@echo "$(call format,docker-down,'Down docker compose dev')"

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

cron-test-e2e: ## Test cron e2e app
	npx nx test cron-e2e
.PHONY: cron-test-e2e


## NEXT https://nx.dev/nx-api/next
web-next-start: ## Next start
	##npx nx start web-next
	npx nx run web-next:start
.PHONY: web-next-start

web-next-build: ## Next build
	##npx nx build web-next
	npx nx run web-next:build
.PHONY: web-next-build

## DOCKER DEV

docker-start:
	$(DOCKER_COMPOSE_DEV) up --build --detach
.PHONY: docker-start

docker-down:
	$(DOCKER_COMPOSE_DEV) down
.PHONY: docker-down

docker-stop:
	$(DOCKER_COMPOSE_DEV) stop
.PHONY: docker-stop
