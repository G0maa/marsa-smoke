# marsa-smoke

Smallest app for exercising [Marsa](https://github.com/marsa-cloud/marsa) end to end: one Bun file, no dependencies.

| Path | Returns |
|---|---|
| `/` | `hello from marsa-smoke <version>`; bump `version` and push to test push-to-deploy |
| `/env` | `{"FOO": ...}`; checks env vars reach the app |
| `/db` | `503` without an attached database; with one, `{"hits": N}` counting every call, so the count surviving a DB pod restart proves persistence |

Listens on `$PORT` (default 8080).
