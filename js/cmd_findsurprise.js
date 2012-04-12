/*
	cmd_findsuprise.js
		This file contains easter egg commands that require regex or other special conditions.
*/

function findsurprise(command)
{	
	if ($.isNumeric(command) && command > 9000)
	{
		return $(document.createElement('p')).text('It\'s over 9000!').prepend($(document.createElement('img')).attr('src', 'img/9000.png'));
	}
}