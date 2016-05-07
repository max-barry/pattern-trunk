# Dokku setup
[Dokku documentation](http://dokku.viewdocs.io/dokku/application-deployment)

## Host machine (server)
1. `dokku apps:create <mydomain.com>`

## Local machine
2. `git remote add dokku dokku@<hostmachinedomain.com e.g. mxbry.com>:<mydomain.com>`
3. `git push dokku master`

## Host machine (server) - LetsEncrypt
4. `dokku letsencrypt <mydomain.com>`

## Extra
#### Destroy app
`dokku apps:destroy <mydomain.com>`

#### Renew LetsEncrypt
`dokku letsencrypt:auto-renew`