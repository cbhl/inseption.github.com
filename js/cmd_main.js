/*
    cmd_main.js
        This file contains functional terminal commands.
        All commands MUST be included in the help index.
        i.e. no jokes, move them to the cmd_misc.js
*/

/*
    Function Naming Convention:
        - if number, prefix var name and fn name with "n" to make it a string
        - var name MUST match terminal's command
        - function name prefixed by "cmd_" followed by var name

    Requirements:
        - return DOM object or null
*/

var help = function cmd_help()
{
    return $('#template .commandlist').clone();
}

var ls = function cmd_ls()
{
    return $('#template .classlist').clone();
}

var cls = function cmd_cls()
{
    $('#terminal').html('');
    return;
}

var date = function cmd_date()
{
    var d = new Date();
    return $(document.createElement('p')).text(d.toString());
}

var blank = function cmd_blank()
{
    return;
}