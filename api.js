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
