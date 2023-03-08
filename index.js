function shout(string) {
    return string.toUpperCase();
  }


  function whisper(string) {
    return string.toLowerCase();
  }


  function logShout(string) {
    console.log(string.toUpperCase());
  }


  function logWhisper(string) {
    console.log(string.toLowerCase());
  }


  function sayHiToHeadphonedRoommate(string) {
    let a = "I can't hear you!";
    let b = "YES INDEED!";
    let c = "I would love to!";
    
    if (string.toLowerCase(string) === string){
      return a;
    }
    else if(string.toUpperCase(string) === string){
      return b;
    }
    else if ("Let\'s have dinner together!" === string){
      return c;
    }
  }