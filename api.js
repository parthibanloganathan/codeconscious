var githubAuth = new OAuth2('github', {
    client_id: '',
    client_secret: '',
    api_scope: 'user, repo'
});

var venmoAuth = new OAuth2('venmo', {
    client_id: '',
    client_secret: '',
    api_scope: 'access_profile, access_friends, make_payments'
});
