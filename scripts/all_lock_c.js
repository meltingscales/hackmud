function(ctx, args)
{
  // https://www.sitepoint.com/shorthand-javascript-techniques/
  // https://medium.com/bits-and-pixels/javascript-shorthand-collection-part-1-203240c826b1

  // Javascript, 'hackmud'

  //  Made by HenryFBP#9408.
  //  Use however you'd like.

  var
  r = [],	//return array

  T = true,
  F = false,
  N = null,

  //hackmud coloring.
  _hc = (s,c) => (`\`${c}${s}\``),

  //length of something. just shorthand.
  len = x => (x.length),

  // string-line. appends 'c' repeatedly, 'n' times, to a ret str.
  sl = (c,n) => (c.repeat(n)),

  //split string {s} by delim {d}. default for d = `,`.
  spl = (s,d=`,`) => (s.split(d)),

  // Print.
	p = t => r.push(t),


  //print line. returns a line.
  pl = c => ("+"+(sl((c || "_"),50))+"+"),

  // if(b){print(t)}
  pi = (t,b) => ((b == T) ? p(t) : N),

  //print alert line. for markup.
  pal = () => (p(alert(pl()))),

  //print Alert line. for markup.
  Pal = () => (p(Alert(pl()))),

  //print ALERT line. for markup.
  PAL = () => (p(ALERT(pl()))),


  // make string 's' yellow, for low alerts.
  alert = s => (_hc(s,`J`)),

  // make string 's' orange, for medium alerts.
  Alert = s => (_hc(s,`F`)),

  // make string 's' dark red, for high alerts.
  ALERT = s => (_hc(s,`x`)),


  //format boolean. green for true, red for false.
  fb = b => (b ? _hc(b,'L') : _hc(b,'D') ),

  // returns if str a contains str b.
  contains = (a,b) => ((a.indexOf(b) == -1) ? F : T);

/***
  * Returns if str 'a' contains ANY strings in list 'lst'
  */
  function containsL(a, lst, v=F)
  {
    for(let idx in lst)
    {
      pi(`Checking if string '${a}' contains string '${lst[idx]}'...`,v);
      if(contains(a,lst[idx]))
      {
        return T;
      }
    }
    return F;
  }

  var
  range = (a, b) => (Array(b+1).fill(1).map((a, b) => a-1 + b)), //range func...

  usage = () => (`Usage: me.script1 {${target_name} : #s.me.scrpt}`),

  gend = v => ({i: 0, l: v}), //gen a dict entry

  floor = n => (n | 0); //floor




/***
  *  Returns a list of all numbers that divide evenly into the number.
  */
  function factors(number)
  {
    let
    divisors = range(1, (floor(number/2))), //try all divisors
    factorsL = []; //bucket

    for(let num in divisors)
    {
      if(Number.isInteger((number / num))) //if divides evenly
      {
        factorsL.push(num);
      }
    }
    return factorsL;
  }

/***
  * Returns true if number has 1 or less factors.
  * (not including itself)
  */
var isPrime = n => (len(factors(n)) <= 1);

/***
  *  Gives you a list of {n} primes.
  */
  function primes(n)
  {
    let
    i = 0,
    ret = [];

    while(len(ret) < n) //from 0 to n, do:
    {
      isPrime(++i) ? ret.push(i) : N; //if it's prime, add it.
    }
    return ret;
  }

// /// TEST ///  Primes Test. Test the primes functions.
//   function primeTest()
//   {
//     p("Testing primes.");
//
//
//     var testRange = range(0,16);
//
//     for(var num in testRange)
//     {
//       var factorsL = factors(num);
//       p(`Factors of '${num}: ${factorsL}'`);
//       var amPrime = isPrime(num);
//       p(`Is ${num} prime? ${fb(amPrime)}`);
//     }
//
//     var primesL = primes(10);
//     p(primesL);
//
//   }
//   primeTest();
//   return r;


  function getKeys(dict) //get the keys outta a dict
  {
    let ret = [];
    for(let key in dict)
    {
      ret.push(key);
    }
    return ret;
  }

  function mergeDict(d1, d2) //tack 2 dicts together.
  {
    let d3 = {};

    for(let k in d1)
    {
      d3[k] = d1[k];
    }
    for(let k in d2)
    {
      d3[k] = d2[k];
    }

    return d3;
  }

  var
  target_name = `t`, 	 //target var name

  oul = spl(`open,unlock,release`),
  colorlist = spl(`red,orange,yellow,green,blue,indigo,violet,purple,pink,black,white,teal,cyan,brown`),
  l0cketlist = spl(`op3n,unl0ck,k3y,3nter`),

  UNLOCKED = `LOCK_UNLOCKED`,
  _STL_LCKD = `LOCK_ERROR`,
  SUPER_UNLOCKED = `Connection terminated.`,
  hl = `kernel.hardline`,
  _ISM = `is missing.`,
  _DAC = `Denied access by CORE`,

  EZ_21 = `EZ_21`,
  EZ_35 = `EZ_35`,
  EZ_40 = `EZ_35`,
  ez_prime = `ez_prime`,
  l0cket = `l0cket`,
  digit = `digit`,
  c001 = `c001`,
  color_digit = `color_digit`,
  c002 = `c002`,
  c002_complement = `c002_complement`,
  c003 = `c003`,
  c003_triad_1 = `c003_triad_1`,
  c003_triad_2 = `c003_triad_2`,

  lockDict =
  { //lock dictionary. also stores found indices of locks.

      EZ_21:              gend(oul),
      EZ_35:              gend(oul),
      EZ_40:              gend(oul),

      ez_prime:           gend(primes(80)), //first 20 primes.

      l0cket:             gend(l0cketlist),

      digit:              gend(range(0,9)),

      c001:               gend(colorlist),
      color_digit:        gend(range(0,9)),

      c002:               gend(colorlist),
      c002_complement:    gend(colorlist),

      c003:               gend(colorlist),
      c003_triad_1:       gend(colorlist),
      c003_triad_2:       gend(colorlist),
  },

  lockNames = getKeys(lockDict); //names of locks in a list.

  function getlocktype(str) //returns a lock type from a string.
  {
    for(let i in lockNames)
    {
      if(contains(str,("\`N"+lockNames[i]+"\`"))) //that special formatting.
      {
        return lockNames[i];
      }
    }
    return N;
  }


  function cracked_all_locks(message) //tells you if there's no locks left to crack.
  {
    if(contains(message, SUPER_UNLOCKED)){return T;} //if it says "conn term'd"
  }


  function cracked_one_lock(message, lockType, v=F) //tells you if have cracked a single lock
  {
    let
    m = message,
    lt = lockType;

    // pi(`Checking if this message means ${lt} is unlocked:`,v);
    pal();
    pi(message,v);
    pal();


    //weird compound locks.
    //TODO: make this programmatic. this takes up wayyy too much space.
    if(
        (contains(m,SUPER_UNLOCKED))                                //if it has "Connection terminated."
       ||(contains(m,_ISM))                                         //if it has "is missing."
       ||(contains(m,_DAC))                                         //if it has "Denied access by CORE"
       ||(contains(lt, c001) && contains(m, color_digit))           //that stupid c001...

       || (contains(lt, c002) && contains(m, c002_complement))     //that stupid c002...

       ||  (contains(lt,c003) && contains(m, c003_triad_1))         //that stupid c003...
       || (contains(lt,c003_triad_1) && contains(m, c003_triad_2))  //that stupid c003_triad_1...
       || (contains(lt,c003_triad_2) && contains(m, c003))          //that stupid c003_triad_2 ==- correct -==> LOCK_UNLOCKED c003

       || (contains(lt, EZ_35) && contains(m, digit))               //that stupid EZ_35...
       || (contains(lt, digit) && contains(m, EZ_35))               //that stupid digit ==- correct -==> LOCK_UNLOCKED EZ_35
      )
    {
     return T;
    }


    for(let i in lockNames) //
    {
      let needle = `${UNLOCKED}\` ${lockNames[i]}`;

      // pi(`Examining: '${alert(lockNames[i])}' for '${needle}'...`,v);

      if(contains(m, needle) && contains(needle, lt))
      {//then the lock we're checking...is prefixed by LOCK_UNLOCKED.
        pi(`Message has ${needle}! It is prefixed by ${UNLOCKED}!`,v);
        return T;
      }
    }

    if(contains(m,_STL_LCKD))
    {
      pi(`It is still locked.`,v);
      return F;
    }
    pi(`The msg doesn't contain '${_STL_LCKD}'.`,v);

    // pi(`We're going to assume it's unlocked.`,v);

    return T;
  }

  function crack(target, prev, lockType, lockObj, v=T)
  {//crack one lock. returns the correct key-val pair. also modifies keyDict.

    pi("crack(...):",v);

    pi("Prev: ",v);
    pi(prev,v);

    pi("Lock object: ",v);
    pi(lockObj,v);

    let
    response = _STL_LCKD, //unconditionally attempt to add a lock param
    tempArgs = prev, //temporary args to be appended
    keys = getKeys(lockObj),
    leftOff = lockObj.i,
    j = (leftOff < 0 ? 0 : leftOff); //0 or where we left off, if it's > 0.

    pi("Keys from lockObj:",v);
    pi(keys,v);

    pi(`We left off at this location: ${j}`,v);
    // pi(`lockObj.l.length = ${lockObj.l.length}`,v)

    while(!(cracked_one_lock(response, lockType, v)) && (j < len(lockObj.l)))
    {

      lockDict.i = j; //counter for password so we can store it.

      let addOn = {};
      addOn[lockType] = lockObj.l[j]; //try a password

      // pi(`Adding this:`,v);
      // pi(addOn,v);

      tempArgs = mergeDict(prev, addOn);

      pi("Trying these args: ",v);
      pi(tempArgs,v);

      response = target.call(tempArgs);

      // pi("Response:",v);
      // pi(response,v);

      // pi("j is: " +j,v);
      j++;
    }

    if(j > len(lockObj.l))
    {
      PAL()
      pi(ALERT("Ran out of passwords to try!"),v);
      PAL();
    }
    else
    {
      pi(alert(`Success for one lock!`,v));
    }


    // pi("lockDict is now this:",v);
    // pi(lockDict,v);

    // pi("Crack func returning this:",v);
    // pi(tempArgs,v);
    return tempArgs;
  }


  try //so we can print our error.
  {

    ///  MAIN  ///

    if(args && (target_name in args)) //if we were passed a t:"something"
    {
      let
      cArgs = {}, //we use this to store correct lock values
      target = args[target_name], //target
      response = target.call(cArgs); //invoke their loc to get a response...

      p(response);

      if(contains(response,hl)) //we gotta be in hardline
      {
        // p(`Must be in hardline.`);
        // return r;
      }

      let
      x = 0,
      maxX = 10; //to avoid infinite loops

      while(!cracked_all_locks(response) && (++x < maxX))
      {
        let locktype = getlocktype(response);
        p(`We've got a lock type of ${Alert(locktype)}`);

        let cArg = crack(target, cArgs, locktype, lockDict[locktype], T); //get correct arg

        cArgs = mergeDict(cArgs, cArg); //add our arg.

        p(alert(`New args:`));
        p(cArgs);

        response = target.call(cArgs); //get next lock type

      }

    }
    else //no args or 't' key missing
    {
      // p(`missing required arg '${target_name}'.`);
      // p(usage());
      // return r;
    }

  }
  catch (e)
  {
    p(`Exception:`);
    p(e);
    p(e.message);
    p(e.stack);
  }
  finally
  {
    return r;
  }

  /// END OF MAIN ///
}
