var $txt = [];
jQuery('.list-wrapper').each(function(){
	$txt.push('<li>');
	$txt.push($(this).find('.list-header-name-assist').text());
	
	$txt.push('<ul>');
	jQuery('.list-card-details', this).each(function(){
		$('.card-short-id',this).remove();
		
		var $label_arr = [];
		jQuery('.list-card-labels > span', this).each(function(){
			var $label = $(this).attr('title').replace(/ /g, '_');
			
			$label_arr.push('#' + $label);
		});
		
		var $label_str = $label_arr.join(" ");
		
		$txt.push('<li>');
		$txt.push($(this).find('.list-card-title').text() + ' ' + $label_str );
		$txt.push('</li>');
		
		
	});
	$txt.push('</ul>');
	$txt.push('</li>');
	
});
$txt.push('</ul>');

$txt_string = $txt.join('');

console.log($txt_string);