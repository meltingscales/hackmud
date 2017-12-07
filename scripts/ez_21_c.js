
function(ctx, args) // t:hi autocomplete!!!1, coolarg:imacoolarg
{
	var p = (t) => r.push(t); // "print". This is a shorter way of defining a 'print' func.
	var si = (a,b) => a.indexOf(b); //"String inside". returns -1 if a does not contains b

	var tn = "t"; //target var name
	var r = [];			//return array


	var pws = "open,unlock,release".split(",");

	var ln = "EZ_21"; 		//lock name
	var ei = "UNLOCKED";		//end identifier

	var resp = args[tn].call({}); //invoke their loc to get a response...

	p(resp);

	if(si(resp,ln) !== -1) //if response contains "EZ_21"
	{
		p('Got a '+ln+' lock!');

		var i = -1;

		while((si(resp,ei) === -1) && (++i < pws.length))
		{//while we don't get 'unlocked' text and haven't tried all passwords
			resp = args[tn].call({ EZ_21:pws[i] });
			p(resp);
		}
		if(si(resp,ei) !== -1)
		{
			p(':)');
			//we have cracked the 1st part
		}

	}
	else
	{
		p('I don\'t think this is a '+ln+' lock.');
	}



	return r;
}
