codeconscious
=============

Want to blame someone for introducing bugs in the code base? This chrome extension makes git blame a reality by introducing a `Blame` button on GitHub. Blame a person and charge them a penalty on Venmo.

This app aims  to increase code accountability in a fun manner.

###Instructions

To use this application by building from source you will have to create Venmo and GitHub apps for oauth access and retrieve their client ids and secrets.

Insert these details in `api.js` as follows:

```
// Create a GitHub app to get a client id and secret. See https://github.com/settings/applications/new
var githubAuth = new OAuth2('github', {
    client_id: 'INSERT CLIENT ID FROM GITHUB HERE',
    client_secret: 'INSERT CLIENT SECRET FROM GITHUB HERE',
    api_scope: 'user, repo'
});

// Create a Venmo app to get a client id and secret. See https://beta-developer.venmo.com/authentication
var venmoAuth = new OAuth2('venmo', {
    client_id: 'INSERT CLIENT ID FROM VENMO HERE',
    client_secret: 'INSERT CLIENT SECRET FROM VENMO HERE',
    api_scope: 'access_profile, access_friends, make_payments'
});
```

Made at PennApps Fall 2013 by Parthiban Loganathan, Derek Xingzhou He, Kaiven Zhou and Aditya Majumdar.
