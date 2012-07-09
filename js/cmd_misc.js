/*
    cmd_misc.js
        This file contains any easter egg commands.
        These do not have (nor should) be included in the help index.
*/

/*
    Function Naming Convention:
        - if number, prefix var name and fn name with "n" to make it a string
        - var name MUST match terminal's command
        - function name prefixed by "cmd_" followed by var name

    Requirements:
        - return DOM object or null
*/

var dir = function cmd_dir()
{
    return $(document.createElement('p')).text('l0l you think this is Windows').prepend($(document.createElement('img')).attr('src', 'img/umad.png'));
}

var exit = function cmd_exit()
{
    return $(document.createElement('p')).text('haha you think you can close me').prepend($(document.createElement('img')).attr('src', 'img/umad.png'));
}

var n42 = function cmd_n42()
{
    return $(document.createElement('p')).text('is the meaning of life');
}

var gg = function cmd_gg()
{
    return $(document.createElement('p')).text('n00b surrender at 20');
}