var cmd = new Object;

/*
	Function Naming Convention:
		- if number, prefix var name and fn name with "n" to make it a string
		- var name MUST match terminal's command
		- function name prefixed by "cmd_" followed by var name

	Requirements:
		- return DOM object or null
*/

cmd['help']          = help;
cmd['ls']            = ls;
cmd['clear']         = clear;
cmd['dir']           = dir;
cmd['42']            = n42;
cmd['gg']            = gg;
cmd['exit']          = exit;
cmd['']              = blank;

//-----------------------------------------------------

$(document).ready(function(){
	$('#terminal p:last-child').focus();
	
	$('#terminal').on('keypress', 'p', function(e){
		if (e.which === 13)
		{
			$(this).attr('contenteditable', false);
			e.preventDefault();
			
			var parent  = $('#terminal');
			var command = $(this).text();
			var output;
			
			try
			{
				output = findsurprise(command);
				
				if (output == null)
				{
					output = cmd[command]();
				}
			}
			catch(e)
			{
				output = $(document.createElement('p')).text('se2016.com: "' + command + '" command not found');
			}
			
			var header  = $(document.createElement('h3')).text('guest@se2016.com ~');
			var newLine = $(document.createElement('p')).addClass('command').attr('contenteditable', true);
			
			parent.append(output);
			parent.append(header);
			parent.append(newLine);
			parent.find('p:last-child').focus();

			$('html, body').animate({ scrollTop: $(document).height() }, 1000);
		}
	});
});