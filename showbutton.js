var commits = [];
var owner, repo;

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
	chrome.storage.local.get(['githubKey'], function(result) {
		jQuery.ajax({
			url: "https://api.github.com/repos/"+owner+"/"+repo+"/git/commits/"+commits[id]['commitCode'],
			type: "GET",
			data: {
				access_token: result.githubKey
			},
			success: function(data) {
				var email = data.committer.email;
				var msg = prompt('Blame ' + email, "FFS WHAT DO YOU THINK YOU'RE DOING?!");
				makePayment(email, msg + "["+commits[id]['commitCode']+"]", -2);
			}
		});
		
		
	});
	
	
}



jQuery(document).ready(function() {

	var url = window.location.href.split('/');
	owner = url[3]; repo = url[4];

	jQuery('.section-first .commitinfo').each(
		function(index, element) {
			
			var line = {};
			line['index'] = index;
			line['ownerId'] = jQuery(this).find('[rel="author"]').text();
			var commitUrl = jQuery(this).find('a').first().attr('href').split('/');
			line['commitCode'] = commitUrl[commitUrl.length-1];
			commits.push(line);
			
			jQuery(this).append('<a class="minibutton blamed" data-id='+ index +'>Blame</a>');	
		}
	);

	jQuery('.blamed').click(function() {
		callback(jQuery(this).data('id'));
	});
	
});
