FROM oven/bun:1.3-alpine
WORKDIR /app
COPY server.ts .
USER bun
CMD ["bun", "server.ts"]
