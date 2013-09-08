  function test()
  {
    alert("worked");
  }

jQuery(document).ready(function(){

  CLIENT_ID = "1366";
  jQuery("#venmo_sign_in").click(function() {
      venmoAuth.authorize(function(){
          });
  });

  jQuery("#github_sign_in").click(function() {
      githubAuth.authorize(function(){
          });
  });
});
