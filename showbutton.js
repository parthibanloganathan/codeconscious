var commits = [];

function callback(username)
{
	var username = commits[id]['ownerId'];

	var user = new Gh3.User(username)
	,	userInfos = $("#user");

	user.fetch(function (err, resUser){

		if(err) {
			throw "outch ..."
		}
		
		console.log(user, resUser);
		alert(user['email']);
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
			
			jQuery(this).append('<span class="blamed" data-id='+ index +'>Blame</span>');	
		}
	);

	jQuery('.blamed').click(function() {
		callback(jQuery(this).data('id'));
	});
	
});