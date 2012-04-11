$(document).ready(function(){
	$('#console p:last-child').focus();
	
	$('#console').on('keypress', 'p', function(e){
		if (e.which === 13)
		{
			$(this).attr('contenteditable', false);
			e.preventDefault();
			
			var command = $(this).text();
			
			var parent  = $(this).parent();
			var output;
			
			var header  = $(document.createElement('h3')).text('guest@se2016.com ~');
			var newLine = $(document.createElement('p')).addClass("command").attr('contenteditable', true);
			
			switch(command)
			{					
				case "help":
					output  = '<p>se2016.com (version 2.0.12-04.10)</p>';
					output += '<ul class="commandlist">';
					output += '<li><span>ls</span><p>display classlist</p></li>';
					output += '<li><span>help</span><p>display list of available commands (more coming soon!)</p></li>';
					output += '<li><span>clear</span><p>clear this console</p></li>';
					output += '</ul>';
					break;
					
				case "ls":
					output = $('#template .classlist').clone();
					break;
					
				case "clear":
					parent.html(newLine);
					parent.find('p:last-child').focus();
					return;
					break;
					
				case "":
					break;
					
				// new commands here
				case "dir":
					output = '<p>l0l you think this is Windows</p>'
					break;
				case "42":
					output = '<p>is the meaning of life</p>'
					break;
				case "9001":
					output = '<p>is over 9000!</p>'
					break;
				case "gg":
					output = '<p>n00b surrender at 20</p>'
					break;
				case "exit":
					output = '<p>haha you think you can close me</p>'
					break;
				// end new commands
					
				default:
					output = $(document.createElement('p')).text('se2016.com: "' + command + '" command not found');;
					break;
			}
			
			parent.append(output);
			parent.append('<br />');
			parent.append(header);
			parent.append(newLine);
			parent.find('p:last-child').focus();

			$('html, body').animate({ scrollTop: $(document).height() }, 1000);
		}
	});
});