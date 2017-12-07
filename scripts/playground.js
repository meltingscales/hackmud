
function(ctx, args) // t:"hi autocomplete!!!1"
{
	var r = [];
	var et = "evaluates to:"; //'evaluates to'

	var p = (t) => r.push(t) // This is a shorter way of defining a 'print' func.

	var caller = ctx.caller;
	var l = #fs.scripts.lib();
	var fs = #fs;

	p('"Function" '+et);
	p(Function);

	p('"typeof(Function)" '+et);
	p(typeof(Function));

	p('It"s a string for clever people! :o');

	//TODO: try using String.prototype or see if you can use prototype as an exploit...


	String.contains = () => ("hi");//not allowed

	String.prototype.contains = () => ("hi");//not allowed

	p(`${eval("hello. can I eval in these weird ticky strings???")}`)

	p('"Object" '+et);
	p(Object);

	p('"typeof(Object)" '+et);
	p(typeof(Object));

	p('"Object()" '+et);
	p(Object())

	p('"typeof(typeof)" '+et);
	p(typeof(typeof);

	p('"typeof" '+et);
	p(typeof);

	p('"typeof" '+et);
	p(typeof);

	p('Caller: ')
	p(caller);

	p('Args: ');
	p(args);

	p('l = #fs.scripts.lib()');
	p('Object.keys(l): ');
  p(Object.keys(l));

	return r;
}
