# UnDiaPorVenezuela

Welcome to UnDiaPorVenezuela,

This project follows the [monorepo structure](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) which is becoming widely adopted by developers working with distributed systems,
since its easier to orchestrate changes that require changes from multiple entities. In your specific case the backend and the web client are
the only 2 entities we need to manage. This structure is becoming more and more popular, and even big companies like [Facebook are using it right now](https://www.youtube.com/watch?v=X0VH78ye4yY)

# Installation

You'll need:

- Ruby
- NodeJS
- Bower
- PostgreSQL
- Redis
- PhantomJS

All other dependencies come as frameworks and can be installed after the above

# Running the app

TODO add executable for this

# About the project

It's easier to follow recent industry standard than it is to make decisions on the go. In order for you to get acquainted with the project:

- [JSON-API](http://jsonapi.org/) is followed across the API design and works of the box with our web client.
- [OAUTH2 password grand type](https://aaronparecki.com/2012/07/29/2/oauth2-simplified) is used as the standard auth mechanism.
- [ember-cli-deploy](https://github.com/ember-cli-deploy/ember-cli-deploy-lightning-pack/blob/master/README.md) is used to deploy the web client, the web clients deployment is by designd decoupled to the backend's deployment pipeline.
- [UIDs are used instead of plain incremental IDs](https://blog.codinghorror.com/primary-keys-ids-versus-guids/) UUIDs are long and don't look pretty on a URL, UIDs are the right compromise in my head. I will add a calendar Wiki explaining how to make the primary key change


# Contributing

Please refer to the labels I've set up and choose the one accordingly, the house rules are:

- Always assign someone to a PR once its opened
- Keep commit messages meaningful, no one minds If they're long
- Use the PR/Issue templates provided first, customize if need be
- Don't push something until its 100% ready for review
- TDD is expected, both BE and FE
