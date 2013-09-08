jQuery(document).ready(function(){

  CLIENT_ID = "1366";
  jQuery("#venmo_sign_in").click(function() {
      venmoAuth.authorize(function(){
          chrome.storage.local.set({'venmoKey': venmoAuth.getAccessToken()});
          });
  });

  jQuery("#github_sign_in").click(function() {
      githubAuth.authorize(function(){
          chrome.storage.local.set({'githubKey': githubAuth.getAccessToken()});
          });
  });
});
