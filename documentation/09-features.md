# Features :monocle_face:

## Non exhaustive list

Here is a list of the features that you can find in that package

- [Create or extend an entity](#decorators)
- [Create or extend a repository](#decorators)
- [Create or extend a service](#decorators)
- [Create middleware before or after medusa authentication strategy](#decorators)
- [Create new migrations](#decorators)
- [Create new router handler](#decorators)
- [Extend validators from medusa to includes custom fields](#decorators)
- [Emit entity subscribers events](#decorators)
- [Group your component by module](#module)
- [Register component dynamically with dynamic module](#module-dynamic-module)
- [Listen to entity subscribers and handle them wherever you want](#decorators)
- [CLI](#cli-medex)
    - [Generate new components](#cli-medex)
    - [Migrate your data](#cli-medex)
- [Monitoring `(Optional module)`](#monitoring)
- [Multi-tenancy architecture `(Optional module)`](#multi-tenancy)

All those features aims to help you build what you want such as

- Creating and managing a marketplace
- Creating a media store to sell nft - video - images - keys - etc.
- And basically create whatever you want on top of `@medusajs`

Share your code

- Build shareable modules/plugins to use across your project or to share with the community

## Directory Architecture

Using this package also allow you to manage your architecture as you want.
you will not be limited by any constraint as long as the component are decorated
and the modules are referenced into the main file to be loaded, everything is fine.
That means that you can go for a modular architecture and decoupled
your code depending on your domains.

Here is the proposed folder structure that you can add to your medusa project

```text
.
├── ...
├── src                                 # Here are located all the files that make your application
│   ├── modules                         # Where you can put all your modules using the medusa-extender
|       ├── Module1
|           ├── module1.entity.ts
|           ├── module1.migration.ts
|           ├── module1.service.ts
|           ├── module1.repository.ts
|           ├── module1.middleware.ts
|           ├── module1.module.ts       # This is where the above components are referenced
|           ├── ...
|       ├── Module2
|           ├── ...
|       ├── Module3
|           ├── ...
│   ├── main.ts                         # this is where the magic happen and your modules will be passed to the load method
└── ...
```