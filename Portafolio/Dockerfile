# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Build the app
COPY . .
RUN pnpm build

# Production image
FROM node:20-alpine AS production
WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js

ENV NODE_ENV=production
EXPOSE 5000
CMD ["node", "server.js"]
