var commits = [];

function callback(id)
{
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