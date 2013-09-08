var githubAuth = new OAuth2('github', {
    client_id: '85fe67036c98989b1f32',
    client_secret: '4bebfb368050da446cc481989b1978fd87aab9e4',
    api_scope: 'user, repo'
});

var venmoAuth = new OAuth2('venmo', {
    client_id: '1364',
    client_secret: 'k6S6nyNezuACYW8DayRtfbLGnDhMJ6VJ',
    api_scope: 'access_profile, access_friends, make_payments'
});
