# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.6.0](https://github.com/adrien2p/medusa-extender/compare/v1.5.5...v1.6.0) (2022-03-20)


### Features

* **cli:** Add new 'init' command to setup a medusa project using the extender ([#55](https://github.com/adrien2p/medusa-extender/issues/55)) ([24f8317](https://github.com/adrien2p/medusa-extender/commits/24f8317e445fc6ecbb017e5043373b3588fb0322))
* **cli:** Allow chainable options for the generate command and auto update module for each new component ([#51](https://github.com/adrien2p/medusa-extender/issues/51)) ([0a84360](https://github.com/adrien2p/medusa-extender/commits/0a84360080c328f3b449beb30dd2121e5979955b))
* **cli:** Improve service template ([dfc6819](https://github.com/adrien2p/medusa-extender/commits/dfc681932b748bb0ca3e394c1d988db464967601))
* **cli:** Update service template to include a static resolutionKey property for easy usage ([cba394d](https://github.com/adrien2p/medusa-extender/commits/cba394d0d8fb6e1f3f98b9496a26e7b0ac445d35))
* Dynamic module enables you to create customizable modules to register components dynamically ([e34168e](https://github.com/adrien2p/medusa-extender/commits/e34168ebb2778110382a9786f6f8de4e1b0d0fe7))
* **modules/multi-tenancy:** Provide an internal (optional) modules for multi-tenancy architecture ([#46](https://github.com/adrien2p/medusa-extender/issues/46)) ([de37aa5](https://github.com/adrien2p/medusa-extender/commits/de37aa56473a320a36b8c226464c615beda38bf8))
* Provide an Omit utility ([a04f7cb](https://github.com/adrien2p/medusa-extender/commits/a04f7cb40236d25cc129383e5d87ead66f433a61))


### Bug Fixes

* **cli:** Entity Template ([55f4a3a](https://github.com/adrien2p/medusa-extender/commits/55f4a3aca471ab134cc4d43b4769d885d650a8f2))
* **cli:** Migrate command should pass the database_database configuration for sqlite connection ([37cc0bb](https://github.com/adrien2p/medusa-extender/commits/37cc0bbef5f3f7aaad2240711dadfe98a5209bf8))
* **cli:** Normalize path to work on any platform ([#59](https://github.com/adrien2p/medusa-extender/issues/59)) ([2a6354e](https://github.com/adrien2p/medusa-extender/commits/2a6354e9b0c517f6c1c2f8c5f1b7b43e57ef4659))
* Export validator from "medusa-extender" lib ([#61](https://github.com/adrien2p/medusa-extender/issues/61)) ([c5e54cd](https://github.com/adrien2p/medusa-extender/commits/c5e54cdb95b5a0c3cbaef12697a4df8ae01b94e6))
* Monitoring module log typo ([50da54c](https://github.com/adrien2p/medusa-extender/commits/50da54c1e9e9cd59a9eb0a911a6ae657ba1a419b))
* Repository loader log typo ([46c898a](https://github.com/adrien2p/medusa-extender/commits/46c898ab34900f3f48f16cefb067056ee461c340))
* **starters:** Build config to allow medusa to discover native expected directories. eg. subscribers ([#52](https://github.com/adrien2p/medusa-extender/issues/52)) ([988d11b](https://github.com/adrien2p/medusa-extender/commits/988d11be489ab28bb128e851ce03b66718016980))

### [1.5.5](https://github.com/adrien2p/medusa-extender/compare/v1.5.4...v1.5.5) (2022-03-12)


### Bug Fixes

* Utils export ([aa76baa](https://github.com/adrien2p/medusa-extender/commits/aa76baa28ecec003464b3d92bf635832bde0c925))

### [1.5.4](https://github.com/adrien2p/medusa-extender/compare/v1.5.3...v1.5.4) (2022-03-12)


### Features

* Update logging strategy and update docs ([1865868](https://github.com/adrien2p/medusa-extender/commits/18658684336f0e98f94d2e9f3d13fda841910ec6))

### [1.5.3](https://github.com/adrien2p/medusa-extender/compare/v1.5.2...v1.5.3) (2022-03-11)

### [1.5.2](https://github.com/adrien2p/medusa-extender/compare/v1.5.1...v1.5.2) (2022-03-11)


### Features

* **cli:** Improve the way the generate command works ([#44](https://github.com/adrien2p/medusa-extender/issues/44)) ([c5087c3](https://github.com/adrien2p/medusa-extender/commits/c5087c3f0b26e84a2d56051ba2f88ee278706741))

### [1.5.1](https://github.com/adrien2p/medusa-extender/compare/v1.5.0...v1.5.1) (2022-03-10)


### Bug Fixes

* generated package ([01b7b97](https://github.com/adrien2p/medusa-extender/commits/01b7b97c20c4cb585391e1b29a27c7b55fb4874f))

## [1.5.0](https://github.com/adrien2p/medusa-extender/compare/v1.4.6...v1.5.0) (2022-03-10)


### Features

* Add CLI for components generation and migration management ([#41](https://github.com/adrien2p/medusa-extender/issues/41)) ([41a41d2](https://github.com/adrien2p/medusa-extender/commits/41a41d22eeb49855fb8fd7fbfb89e2ba331564f3))

### [1.4.6](https://github.com/adrien2p/medusa-extender/compare/v1.4.5...v1.4.6) (2022-03-09)

### [1.4.5](https://github.com/adrien2p/medusa-extender/compare/v1.4.4...v1.4.5) (2022-03-08)


### Features

* Allow to pass modules along side the components to a @Module ([cc3c8f9](https://github.com/adrien2p/medusa-extender/commits/cc3c8f935f90467c86e93d6f0b5276a2073a6ca1))
* Reorganise files and add runtime package install for optional modules such as monitoring ([c7fec4d](https://github.com/adrien2p/medusa-extender/commits/c7fec4d1c6642d38da51c17e12f41969b210d0fe))


### Bug Fixes

* Test pipeline with new medusa versions ([b8bfac7](https://github.com/adrien2p/medusa-extender/commits/b8bfac72ccc99b3a2c194a80eef516df80e064e8))

### [1.4.4](https://github.com/adrien2p/medusa-extender/compare/v1.4.3...v1.4.4) (2022-02-26)


### Bug Fixes

* Middleware loading on seprate domains ([ae4f660](https://github.com/adrien2p/medusa-extender/commits/ae4f660d5ec4c8e72a0723cf60220049c64aa35e))

### [1.4.3](https://github.com/adrien2p/medusa-extender/compare/v1.4.2...v1.4.3) (2022-02-26)


### Bug Fixes

* router method typings ([026ed03](https://github.com/adrien2p/medusa-extender/commits/026ed0374adf869aaf4a11f3aecb16c159f7e791))

### [1.4.2](https://github.com/adrien2p/medusa-extender/compare/v1.4.1...v1.4.2) (2022-02-26)


### Features

* Improve middlewares and routers management when adding to medusa core ([db44735](https://github.com/adrien2p/medusa-extender/commits/db44735f24662614b5fd8635511d50a938eec2cc))


### Bug Fixes

* Router - pass next to the handler to let the consumer decide what to do ([575c26f](https://github.com/adrien2p/medusa-extender/commits/575c26fee79b487044d9ed9b90cc9696859ca0bb))

### [1.4.1](https://github.com/adrien2p/medusa-extender/compare/v1.4.0...v1.4.1) (2022-02-25)


### Features

* Allow to pass a list of handlers to the router decorator ([737355b](https://github.com/adrien2p/medusa-extender/commits/737355b00783f963b85ada8035438885bbc4c69e))
* **starters:** Improve server ([c2d2cfc](https://github.com/adrien2p/medusa-extender/commits/c2d2cfc274a2f86eadc4b37e15523e1383c05ec9))


### Bug Fixes

* Wrong local path in the index when reaching modules ([2631023](https://github.com/adrien2p/medusa-extender/commits/2631023a225b96f7f9da14cff1beac5bdd316fd4))

## [1.4.0](https://github.com/adrien2p/medusa-extender/compare/v1.3.6...v1.4.0) (2022-02-23)

### [1.3.6](https://github.com/adrien2p/medusa-extender/compare/v1.3.5...v1.3.6) (2022-02-21)


### Features

* Add demo video for products per store ([16c7f70](https://github.com/adrien2p/medusa-extender/commits/16c7f702f404dbd97c9df6e4baf42ad1d8a1ebca))
* drop swc support and update starters accordingly ([#31](https://github.com/adrien2p/medusa-extender/issues/31)) ([7317122](https://github.com/adrien2p/medusa-extender/commits/7317122bd4b9e6005765ae11ccdd5a38173c1040))

### [1.3.5](https://github.com/adrien2p/medusa-extender/compare/v1.3.4...v1.3.5) (2022-02-14)


### Bug Fixes

* Fix middlaware medusa integration ([bf18ba8](https://github.com/adrien2p/medusa-extender/commits/bf18ba8eacb8a9e3a7438ecc618e5835d6a5c66e))

### [1.3.4](https://github.com/adrien2p/medusa-extender/compare/v1.3.3...v1.3.4) (2022-02-14)


### Bug Fixes

* Fix tests suite ([15561b5](https://github.com/adrien2p/medusa-extender/commits/15561b542ae5ce9c82bb2108aa9f5b70ba2433af))

### [1.3.3](https://github.com/adrien2p/medusa-extender/compare/v1.3.2...v1.3.3) (2022-02-14)


### Bug Fixes

* Wrapped middleware passed to medusa ([9a61b5c](https://github.com/adrien2p/medusa-extender/commits/9a61b5c5dde5d9e0295a95c2e7cd8701206e77bc))

### [1.3.2](https://github.com/adrien2p/medusa-extender/compare/v1.3.1...v1.3.2) (2022-02-14)


### Features

* Improve middleware/router API ([ea9ab8a](https://github.com/adrien2p/medusa-extender/commits/ea9ab8ae3ce307589919d15d62f45816e01f9b21))

### [1.3.1](https://github.com/adrien2p/medusa-extender/compare/v1.3.0...v1.3.1) (2022-02-14)


### Bug Fixes

* Fix MedusaMiddleware type ([f05e9c3](https://github.com/adrien2p/medusa-extender/commits/f05e9c3798d49475b750bed7292f95299bc47510))

## [1.3.0](https://github.com/adrien2p/medusa-extender/compare/v1.2.0...v1.3.0) (2022-02-14)

## [1.2.0](https://github.com/adrien2p/medusa-extender/compare/v1.1.9...v1.2.0) (2022-02-14)


### Features

* Improve middleware handling ([#27](https://github.com/adrien2p/medusa-extender/issues/27)) ([82601e9](https://github.com/adrien2p/medusa-extender/commits/82601e98da4d53f15ca35830822844e208ed8ba2))
* Improve middleware handling to increase DX ([786e03c](https://github.com/adrien2p/medusa-extender/commits/786e03c2e039597c89829af9a66164f9b72348b2))

### [1.1.9](https://github.com/adrien2p/medusa-extender/compare/v1.1.8...v1.1.9) (2022-02-12)


### Bug Fixes

* Remove monggose dependency ([b0192c8](https://github.com/adrien2p/medusa-extender/commits/b0192c89a0b9c5d7c1467488dd388ed78dd1bea9))

### [1.1.8](https://github.com/adrien2p/medusa-extender/compare/v1.1.7...v1.1.8) (2022-02-10)


### Bug Fixes

* Remove postinstall script using husky ([744c664](https://github.com/adrien2p/medusa-extender/commits/744c6647d577dbfd7934b6556a142fdcc7593a9c))

### [1.1.7](https://github.com/adrien2p/medusa-extender/compare/v1.1.6...v1.1.7) (2022-02-09)

### [1.1.6](https://github.com/adrien2p/medusa-extender/compare/v1.1.5...v1.1.6) (2022-02-09)


### Bug Fixes

* Documentation details blocks ([50b7ce6](https://github.com/adrien2p/medusa-extender/commits/50b7ce6b8fc46bf672a715bc0f46efee62307aa6))

### [1.1.5](https://github.com/adrien2p/medusa-extender/compare/v1.1.4...v1.1.5) (2022-02-09)


### Bug Fixes

* Update link to github assets to be raw ([bd1b77e](https://github.com/adrien2p/medusa-extender/commits/bd1b77e5a6ebe1b7cb1b88db0238d58e6104d68e))

### [1.1.4](https://github.com/adrien2p/medusa-extender/compare/v1.1.3...v1.1.4) (2022-02-09)


### Features

* Move all project assets to an orphan branch (assets) ([bd48723](https://github.com/adrien2p/medusa-extender/commits/bd48723f504366e5d54e7e4f1457550f4cbe9f5f))


### Bug Fixes

* action workflow ([7801459](https://github.com/adrien2p/medusa-extender/commits/78014593f84a13ebaaa868e40fc32f6f6d4877a8))
* Broken link for graph dependencies in README ([99b0a79](https://github.com/adrien2p/medusa-extender/commits/99b0a79157c2a73f686c22851721d50b2e0b6fe6))
* Dedent action workflow ([001b3e8](https://github.com/adrien2p/medusa-extender/commits/001b3e8534179cace8b7b10c9345c4c0c19aee4e))

### [1.1.3](https://github.com/adrien2p/medusa-extender/compare/v1.1.2...v1.1.3) (2022-02-09)

### [1.1.2](https://github.com/adrien2p/medusa-extender/compare/v1.1.1...v1.1.2) (2022-02-09)

### [1.1.1](https://github.com/adrien2p/medusa-extender/compare/v1.1.0...v1.1.1) (2022-02-09)

## [1.1.0](https://github.com/adrien2p/medusa-extender/compare/v1.0.8...v1.1.0) (2022-02-09)


### Features

* Add support of commitlint ([#22](https://github.com/adrien2p/medusa-extender/issues/22)) ([957c934](https://github.com/adrien2p/medusa-extender/commits/957c9341b65054582998f0d51f64639687feb490))
* Bump dependencies versions ([eee2981](https://github.com/adrien2p/medusa-extender/commits/eee29810bbc35d0b97adb17efb1fea7788853754))
* Improve typings ([#18](https://github.com/adrien2p/medusa-extender/issues/18)) ([35f4439](https://github.com/adrien2p/medusa-extender/commits/35f4439610ce0e34d3afe60cf143d230c1f7e898))
* remove doc workflow that generate to much changes in PR's + re-build the doc ([875e721](https://github.com/adrien2p/medusa-extender/commits/875e7215636d833f531b282e995fbd5c24368ed1))
* Remove Medusa and rename Loader to Medusa ([11ea970](https://github.com/adrien2p/medusa-extender/commits/11ea9708ba194d9ad2b3fbbaf2007d285175c4db))
* start rewriting the documentation ([#16](https://github.com/adrien2p/medusa-extender/issues/16)) ([d0b8fc2](https://github.com/adrien2p/medusa-extender/commits/d0b8fc2a6461623673a5aaaa8f47a37147711a2f))
* Update commint lint configuration ([f9bbca9](https://github.com/adrien2p/medusa-extender/commits/f9bbca9f592facfb5c87bdd5c76cbabdae48649e))
* update jusky hooks ([d64ade5](https://github.com/adrien2p/medusa-extender/commits/d64ade50494abdab8d150d0bcd6835ab4a87fda0))
* Update logo ([79b5f30](https://github.com/adrien2p/medusa-extender/commits/79b5f306de8050fc44dc6c1ef0c426ebd9d34a6f))
* Update README decorators section ([bbc3786](https://github.com/adrien2p/medusa-extender/commits/bbc3786b62ec54314d133a79aef03addf73613c0))
* validators loader ([#21](https://github.com/adrien2p/medusa-extender/issues/21)) ([451edf9](https://github.com/adrien2p/medusa-extender/commits/451edf9e78cd3864c81c9f94e1a5e41e6b1b69b4))


### Bug Fixes

* chalk import ([694267a](https://github.com/adrien2p/medusa-extender/commits/694267a105d953f52e19b5e6955c0ff8d419ce40))
* deduplicate subject-empty property from commitlint ([b8c11a3](https://github.com/adrien2p/medusa-extender/commits/b8c11a3127f6981ea4b27de7965b78221d3d7e33))
* **docs:** Fix images and expandable not displaying properly ([3e042bb](https://github.com/adrien2p/medusa-extender/commits/3e042bb677e88a001e4efa036fe24c88a986cc41))
* **docs:** Fix images and expandable not displaying properly ([64fa400](https://github.com/adrien2p/medusa-extender/commits/64fa4008b43466a8be15dc2ec06bcd54eec88b2a))
* missing conflict resolution ([e8c56da](https://github.com/adrien2p/medusa-extender/commits/e8c56dab79a0ff6f2469724e51d9afe1e00b9994))
* README doc ([de32581](https://github.com/adrien2p/medusa-extender/commits/de32581132abced8024925223c4d8e9db4923b65))
* Remove scope from entity ([f0c8d22](https://github.com/adrien2p/medusa-extender/commits/f0c8d22aa2a68e1cf59b39e2b572a387a0cda262))
* swcrcspec ([21fff7d](https://github.com/adrien2p/medusa-extender/commits/21fff7d0ea225bbd8356debf8ffefb40ca0213bc))
* Typo in constants file name ([#15](https://github.com/adrien2p/medusa-extender/issues/15)) ([4aa5313](https://github.com/adrien2p/medusa-extender/commits/4aa531317471b0a7f41c1df9ba01ac71e2c1ee48))
* Update jest config as swc doc explain ([136997e](https://github.com/adrien2p/medusa-extender/commits/136997eac98cfa398a196bac2f7d98f5994930af))
