# DkDev

## Start the application

Run `npx nx serve cron` to start the development server. Happy coding!

## Build for production

Run `npx nx build cron` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Articles
### Wake up
https://habr.com/ru/articles/527638/
https://yablyk.com/569175-how-to-wake-computer-from-sleep-mode-automatically/

### Grids
https://habr.com/ru/companies/samokat_tech/articles/711202/

### Microservices
https://github.com/mguay22/nestjs-rabbitmq-microservices

## Docker

### Docker Build
```
npx nx reset
make cron-build
docker run --rm -it --entrypoint=sh cron-next:v0.0.1

docker build --tag cron-next:v0.0.1 --file apps/cron/Dockerfile .

docker tag cron-next:v0.0.1 ghcr.io/developkosarev/cron-next:v0.0.1
docker images ghcr.io/developkosarev/*
docker push ghcr.io/developkosarev/cron-next:v0.0.1
docker run -d -p 3001:3001 --name frontol-service-next cron-next:v0.0.1
```     

### Docker NX
```
docker build --tag dk-dev:nx-container --file /home/dk/my-project/node-nest/magento-nest/apps/dk-dev/Dockerfile .
docker run --rm -it --entrypoint=sh cron-next:v0.0.1

docker compose up
docker compose up -d

docker compose -f compose-magento-next.yml pull \
  && docker compose -f compose-magento-next.yml down \
  && docker compose -f compose-magento-next.yml up

npx nx g @nx/workspace:move --projectName dk-dev --destination apps/cron --newProjectName cron
```
