###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine AS development

# Create app directory
WORKDIR /opt/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:20-alpine AS build

WORKDIR /opt/app

COPY --chown=node:node package*.json ./

# In order to run `npm run build` we need access to the Nest CLI which is a dev dependency. In the previous development stage we ran `npm ci` which installed all dependencies, so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /opt/app/node_modules ./node_modules
COPY --chown=node:node . .

# Running `npm ci` removes the existing node_modules directory and passing in --only=production ensures that only the production dependencies are installed. This ensures that the node_modules directory is as optimized as possible
#RUN npm ci --only=production && npm cache clean --force

USER node

# Set NODE_ENV environment variable
ENV NODE_ENV=production
# Run the build command which creates the production bundle
RUN npx nx build dk-dev

###################
# PRODUCTION
###################

FROM node:20-alpine AS production
LABEL org.opencontainers.image.source="https://github.com/developkosarev/magento-nest"
LABEL org.opencontainers.image.title="magento-nest"
LABEL org.opencontainers.image.authors="develop.kosarev@gmail.com"
LABEL org.opencontainers.image.version="0.0.1"

WORKDIR /opt/app

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /opt/app/node_modules ./node_modules
COPY --chown=node:node --from=build /opt/app/dist/apps/dk-dev ./dist

USER node
EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]

#CMD ["dumb-init", "node", "dist/main.js"]
