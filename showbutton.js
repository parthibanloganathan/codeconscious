var commits = [];

function makePayment(venmo_email, venmo_note, venmo_amount) {
	
	chrome.storage.local.get(['venmoKey'], function(result) {	
		jQuery.ajax({
  			url: "https://api.venmo.com/payments",
	  		type: "POST",
  			data: {
  				access_token: result.venmoKey,
  				email: venmo_email,
	  			note: venmo_note,
  				amount: venmo_amount
  			},
 	 		success: function() {
  				console.log("Payment successful");
  			},
  			error: function() {
  				console.log("Payment failed.");
  			}
  		});
  	});
  }

function callback(id)
{
	var username = commits[id]['ownerId'];

	var user = new Gh3.User(username)
	,	userInfos = $("#user");

	user.fetch(function (err, resUser){

		if(err) {
			throw "outch ..."
		}
		
		console.log(user, resUser);
		makePayment(user['email'], "Shame for breaking on commit " + commits[id]['commitCode']+" !", -2);
	});
}



jQuery(document).ready(function() {

	jQuery('.section-first .commitinfo').each(
		function(index, element) {
			
			var line = {};
			line['index'] = index;
			line['ownerId'] = jQuery(this).find('[rel="author"]').text();
			// line['ownerEmail'] = ext.findEmail(line['ownerId']);
			line['commitCode'] = jQuery(this).find('a').first().text();
			commits.push(line);
			
			jQuery(this).append('<a class="minibutton blamed" data-id='+ index +'>Blame</a>');	
		}
	);

	jQuery('.blamed').click(function() {
		callback(jQuery(this).data('id'));
	});
	
});
