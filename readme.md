IMS mobile app
==============

# Auth

We are using Microsoft as o oAuth 2.0 OIDC provider.

https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc

# Deployment

We are using AWS Amplify.

https://eu-west-1.console.aws.amazon.com/amplify/home?region=eu-west-1#/d11jiazsz9cis3

There are 2 instances:

- develop: https://develop.d11jiazsz9cis3.amplifyapp.com/
- live: https://m.ims.dccoperations.com/

If you push a new commit, the proper instance will automatically deploy.

## When user receive an update?

The Application uses service workers, so:

### Application is not running (even in the background)

1. Open app (still old version)
1. Close (swipe from background apps)
1. Open app (there is a new version)

### Application is running

1. Close (swipe from background apps)
1. Open app (still old version)
1. Close (swipe from background apps)
1. Open app (there is a new version)