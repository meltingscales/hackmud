function(ctx, args)
{

	// Javascript, 'hackmud'

	//  Made by HenryFBP#9408.

	var p = (t) => r.push(t); // "print". This is a shorter way of defining a 'print' func.
	var si = (a,b) => a.indexOf(b); //"String inside". returns -1 if a does not contains b
	var rng = (a, b) => Array(b+1).fill(1).map((a, b) => a-1 + b); //range func...

	var tn = "t"; 	//target var name
	var r = [];			//return array
	var win = [];   //winning keywords indices go here

	var pws = "open,unlock,release".split(",");
	var dgts = rng(0,9);

	p(dgts);

	var ln1 = "EZ_40"; 		//lock name 1
	var ln2 = "digit"; 		//lock name 2
	var ei = "UNLOCKED";		//end identifier

	// var caller = ctx.caller;
	// var l = #fs.scripts.lib();

	// p('Caller: ')
	// p(caller);
  //
	// p('Args: ');
	// p(args);

	var resp = args[tn].call({}); //invoke their loc to get a response...

	p(resp);

	if(si(resp,ln1) !== -1) //if response contains "EZ_40"
	{
		p('Got a '+ln1+' lock!');

		var i = -1;

		while((si(resp,ln2) === -1) && (++i < pws.length))
		{//while we don't get 'digit' text and haven't tried all passwords
			resp = args[tn].call({ EZ_40:pws[i] });

			p(resp);
		}

		p(ln1+":"+pws[i]); //print right password

		// if(si(resp,ln2) !== -1) //if response contains "digit"
		// {
		// 	win[0] = i;
		// 	var i = -1;
		// 	while(si(resp,ei) === -1) && (++i < dgts.length))
		// 	{ //while we don't get 'unlocked' text and haven't tried all digits
		// 		resp = args[tn].call({
		// 			EZ_40:pws[win[0]], //use our old, correct pass
		// 			digit:dgts[i] //try 0, 1, ... 9
		// 		});
		// 		p(resp);
		// 	}
		// }

	}
	else
	{
		p('Not a '+ln1+' lock.');
	}



	return r;
}
