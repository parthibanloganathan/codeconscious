  function test()
  {
    alert("worked");
  }

jQuery(document).ready(function(){

  CLIENT_ID = "1366";
  jQuery("#venmo_sign_in").click(function() {
    console.log('venmo clicked');
    window.open("https://api.venmo.com/oauth/authorize?client_id=" + CLIENT_ID + "&scope=make_payments&response_type=token");
  });

  jQuery("#github_sign_in").click(function() {
      githubAuth.authorize();
      alert(githubAuth.getAccessToken());
  });
});
