FROM oven/bun:nope
WORKDIR /app
COPY server.ts .
USER bun
CMD ["bun", "server.ts"]
