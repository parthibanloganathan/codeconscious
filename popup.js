  function test()
  {
    alert("worked");
  }

jQuery(document).ready(function(){

  CLIENT_ID = "1366";
  jQuery("#venmo_sign_in").click(function() {
      venmoAuth.authorize(function(){
          chrome.storage.sync.set({'venmoToken': venmoAuth.getAccessToken()});
          });
  });

  jQuery("#github_sign_in").click(function() {
      githubAuth.authorize(function(){
          chrome.storage.sync.set({'githubToken': githubAuth.getAccessToken()});
          });
  });
});
