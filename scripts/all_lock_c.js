function (ctx, args)
{
  // https://www.sitepoint.com/shorthand-javascript-techniques/
  // https://medium.com/bits-and-pixels/javascript-shorthand-collection-part-1-203240c826b1

  /***
   * This script is a basic T1 lock cracker.
   * You simply pass it a LOC like so:
   * bob.all_lock_c {t:#s.anon_1yh3.their_loc_12h2d5}
   */

  // Javascript, 'hackmud'

  //  Made by HenryFBP#9408.
  //  Use however you'd like.

  var
  r = [],	//return array
  od_ = {}, //list of already-cracked NPC addresses. This exists because if
            //you call an already-cracked NPC, it exposes you.

  T = true,
  F = false,
  N = null,

  // "safe call". only does t.call(a) if dictionary {d} doesn't have the key
  // {t} inside of it. this is to ensure we don't call an address after cracking
  // it, which will expose our loc!!!
  _sc = (t, a, d = od_) => ((t in d) == T) ? "_sc" : (t.call(a)),

  //hackmud coloring.
  _hc = (s,c) => (`\`${c}${s}\``),

  //length of something. just shorthand.
  len = x => (x.length),

  // string-line. appends 'c' repeatedly, 'n' times, to a ret str.
  sl = (c,n) => (c.repeat(n)),

  //split string {s} by delim {d}. default for d = `,`.
  spl = (s,d=`,`) => (s.split(d)),

  //sanitize string {s} with formatting {f}. Removes '\r' and '\n' only by default.
  _sntz = (s,r) => (s.replace((r || (/\r?\n|\r/g)),'')),

  // Print.
	p = t => r.push(t),


  //print line. returns a line.
  pl = (c = "_", t = 50, e = "+") => (e + sl(c, t) + e),

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
  _scnt = (a, b) => ((a.indexOf(b) == -1) ? F : T);

  // function _scnt(a, b, v=T)
  // {
  //   pi(`Is '${b}' inside '${a}'?`,v);
  //   if(a.indexOf(b) !== -1)
  //   {
  //     pi(Alert('It is!'),v);
  //     return T;
  //   }
  //   return F;
  // }

/***
  * Returns if str 's' contains ANY strings in list 'lst'
  */
  function containsL(s, lst, v=F)
  {
    for(let idx in lst)
    {
      pi(`Checking if string '${s}' contains string '${lst[idx]}'...`,v);
      if(_scnt(s,lst[idx]))
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
  function factors(n)
  {
    let
    divs = range(1, (floor(n/2))), //try all divisors
    facts = []; //bucket

    for(let d in divs)
    {
      if(Number.isInteger((n / d))) //if divides evenly
      {
        facts.push(d);
      }
    }
    return facts;
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
  colorlist = spl(`red,pink,brown,orange,yellow,gold,lime,green,teal,cyan,blue,purple,indigo,magenta,violet,silver,gray,grey,black,white`),

  l0cketlist = spl(`tvfkyq,xwz7ja,vc2c7q,hc3b69,5c7e1r,afgny5,4jitu5,vthf6e`), //these come from k3y_v1 item descriptions from market.browse. there are 6 in total.

  UNLOCKED = `LOCK_UNLOCKED`,
  _STL_LCKD = `LOCK_ERROR`,
  SUPER_UNLOCKED = `Connection terminated.`,
  _HL = `kernel.hardline`,
  _REQ = `required`,
  _ISM = `is missing.`,
  _DAC = `Denied access by CORE`,
  // _CCC = `is not the correct complement color.`,
  _CCC = `complement color.`,
  _CDC = `color digit checksum v`,//alue

  EZ_21 = `EZ_21`,
  EZ_35 = `EZ_35`,
  EZ_40 = `EZ_40`,
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

      ez_prime:           gend(primes(27)), //some primes. won't have primes over 100.

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
      if(_scnt(str,("\`N"+lockNames[i]+"\`"))) //that special formatting.
      {
        return lockNames[i];
      }
    }
    return N;
  }


  function cracked_all_locks(message) //tells you if there's no locks left to crack.
  {
    if(_scnt(message, SUPER_UNLOCKED)){return T;} //if it says "conn term'd"
  }


  function cracked_one_lock(message, lockType, v=F) //tells you if have cracked a single lock
  {
    let
    m = message,
    lt = lockType,
    ret = F; //watchdog variable. This is so we don't immediately return, for logging purposes.


    // pi(`Passed these args:`,v);
    // pi(`m: ${m}`,v);
    // pi(`lt: ${lt}`,v);

    //weird compound locks.
    //TODO: make this programmatic. this takes up wayyy too much space.
    if(!ret && (
          (_scnt(m,SUPER_UNLOCKED))                             //if it has "Connection terminated."
       || (_scnt(m,_ISM))                                       //if it has "is missing."
       || (_scnt(m,_DAC))                                       //if it has "Denied access by CORE"

       || (_scnt(lt, c001) && _scnt(m, color_digit))            //that stupid c001...
       || (_scnt(lt, color_digit) && _scnt(m, c001))            //that stupid color_digit ==- correct -==> LOCK_UNLOCKED c001

       || (_scnt(lt, c002) && _scnt(m, c002_complement))        //that stupid c002...
       || (_scnt(lt, c002_complement) && _scnt(m, c002))        //that stupid c002_complement ==- correct -==> LOCK_UNLOCKED c002

       || (_scnt(lt, c003) && _scnt(m, c003_triad_1))           //that stupid c003...
       || (_scnt(lt, c003_triad_1) && _scnt(m, c003_triad_2))   //that stupid c003_triad_1...
       || (_scnt(lt, c003_triad_2) && _scnt(m, c003))           //that stupid c003_triad_2 ==- correct -==> LOCK_UNLOCKED c003

       || (_scnt(lt, EZ_35) && _scnt(m, digit))                 //that stupid EZ_35...
       || (_scnt(lt, digit) && _scnt(m, EZ_35))                 //that stupid digit ==- correct -==> LOCK_UNLOCKED EZ_35

       || (_scnt(lt, ez_prime) && _scnt(m, EZ_40))              //that stupid ez_40 ==- correct -==> LOCK_UNLOCKED EZ_40
     ))
    {
     ret = T;
    }

    if(
      (_scnt(lt, color_digit) && _scnt(m, _CDC))           //that stupid "x is not the correct color digit checksum value"..."
    )
    {
      ret = F;
    }


    for(let i in lockNames)
    {
      let needle = `${UNLOCKED}\` ${lockNames[i]}`;

      // pi(`Examining: '${alert(lockNames[i])}' for '${needle}'...`,v);

      if(!ret && (_scnt(m, needle) && _scnt(needle, lt)))
      {//then the lock we're checking...is prefixed by LOCK_UNLOCKED.
        pi(`Message has ${needle}! It is prefixed by ${UNLOCKED}!`,v);
        ret = T;
      }
    }

    if(!ret && _scnt(m,_STL_LCKD)) //if m has "LOCK_ERROR"
    {
      // pi(`Still locked.`,v);
      ret = F;
    }
    else //else, it doesn't say it's still locked.
    {
      pi(`\`LThis means the single \`${Alert(lt)}\`L lock was cracked:\``,v);
    }

    if(ret) //if we think it's unlocked
    {
      pal();
      pi(message,v);
      pal();
    }



    return ret;
  }

  function _crackone(target, prev, lockType, lockObj, v=T)
  {//crack one lock. returns the correct key-val pair. also modifies keyDict.

    // pi("_crackone(...):",v);

    // pi("Prev: ",v);
    // pi(prev,v);
    //
    // pi("Lock object: ",v);
    // pi(lockObj,v);

    let
    response = _STL_LCKD, //unconditionally attempt to add a lock param
    tempArgs = prev, //temporary args to be appended
    keys = getKeys(lockObj),
    leftOff = lockObj.i,
    j = (leftOff < 0 ? 0 : leftOff); //0 or where we left off, if it's > 0.

    // pi("Keys from lockObj:",v);
    // pi(keys,v);
    //
    // pi(`We left off at this location: ${j}`,v);
    // pi(`lockObj.l.length = ${lockObj.l.length}`,v)

    while(!(cracked_one_lock(response, lockType, v)) && (j < len(lockObj.l)))
    {

      lockDict.i = j; //counter for password so we can store it.

      let addOn = {};
      addOn[lockType] = lockObj.l[j]; //try a password

      pi(`Trying this: ${_hc(lockType,'N')} : ${_hc(addOn[lockType],'V')}`,v);

      tempArgs = mergeDict(prev, addOn);

      // pi("Trying these args: ",v);
      // pi(tempArgs,v);

      response = _sc(target, tempArgs);

      // pi("Response:",v);
      // pi(response,v);

      // pi("j is: " +j,v);
      j++;
    }

    //if at the end of passwords and have NOT cracked the lock,
    if((j == len(lockObj.l)) && !cracked_one_lock(response, lockType))
    {
      PAL()
      pi(ALERT("Ran out of passwords to try!"),v);
      PAL();
    }



    // pi("lockDict is now this:",v);
    // pi(lockDict,v);

    // pi("_crackone func returning this:",v);
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
      response = _sc(target, cArgs); //invoke their loc to get a response...

      p(response);

      if(_scnt(response,_HL)) //we gotta be in hardline
      {
        p(_HL+" "+_REQ);
        return r;
      }

      let
      x = 0,
      maxX = 15; //to avoid infinite loops

      while(!cracked_all_locks(response) && (++x < maxX))
      {
        let locktype = getlocktype(response);
        p(`\`LWe've got a lock type of \`${Alert(locktype)}`);

        let cArg = _crackone(target, cArgs, locktype, lockDict[locktype], T); //get correct arg

        cArgs = mergeDict(cArgs, cArg); //add our arg.

        p(alert(`New args:`));
        p(cArgs);

        response = _sc(target, cArgs); //get next lock type

        //if we've unlocked it
        if(_scnt(response, SUPER_UNLOCKED))
        {
          od_[target] = SUPER_UNLOCKED; //record that fact
        }
      }

    }
    else //no args or 't' key missing
    {
      p(usage());
    }

  }
  catch (e) //print exception information
  {
    PAL();
    p(e.message);
    p(e.stack);
    PAL();
  }
  finally //to allow printing output even with errors
  {
    return (r.slice(-200)); //last 900
  }

  /// END OF MAIN ///
}
