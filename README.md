# Netcatty plugin examples

Development-only examples for Netcatty plugin acceptance testing. These are not production tools or stable-app compatibility claims.

## Marketplace acceptance example

`com.netcatty.market-smoke` registers one browser command returning a fixed version and one static HTML panel. Required permissions: `commands`, `menus`, `views`; no optional permissions. It has no network, host, filesystem, terminal, credentials, background, or native capabilities. The source has no dependencies or build step.

The manifest deliberately pins Netcatty app `=0.0.0` and API `=0.1.0-internal.1` for development acceptance only. These versions match the reviewed development build family, not a released minimum version. Do not assume compatibility with stable Netcatty releases.

This repository and its test prereleases are separate from the Netcatty desktop release feed and plugin registry. Publication does not admit the example to a catalog or install it for anyone. Installation testing must use the ordinary disabled-first, permission-review, explicit-enable flow; no permission or installation bypass is included. Formal market admission is a separate controlled step.

## Reviewed source and test packages

The source for each version is at `plugins/market-smoke/` in its corresponding immutable tag. Each plugin directory contains exactly `LICENSE`, `README.md`, `index.js`, `netcatty.plugin.json`, and `panel.html`. Those files are preserved byte-for-byte from the reviewed package source, including the historical publication-status sentence in the packaged README. This repository and release descriptions record the actual publication status.

| Version | Source tag | Package asset | Bytes | SHA-256 |
| --- | --- | --- | ---: | --- |
| 0.1.0 | `market-smoke-v0.1.0` | `market-smoke-0.1.0.ncpkg` | 4183 | `d402cab030784c39e3f5a4f84b1c00b97c118dc17d715e057b6eecc5508a6724` |
| 0.1.1 | `market-smoke-v0.1.1` | `market-smoke-0.1.1.ncpkg` | 4183 | `3296bd1531b4a4893e87b3c051ace4b8b6d5b2022d00295fc6010fabab6c1511` |

Each GitHub prerelease includes the listed package and a `SHA256SUMS` file. The application package is the `.ncpkg` asset, not GitHub's generated source archive. Version 0.1.1 changes only version-related source and visible/returned version text; permissions and contribution identifiers remain unchanged.

The reviewed package bytes were created with the static Netcatty plugin CLI from commit `933bc93fc3b3027209955c38f1e30a7daf2e5fc0`. Publication uses those already-reviewed bytes; QA tooling, caches, profiles, and logs are not part of this repository or its plugin packages.

## License

MIT; see [LICENSE](LICENSE).
