class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback();
      } else {
        return 0;
      }
    }, 1000)
  }

  getMinutes() {
   let fullMinute = Math.floor(this.currentTime / 60);
   return fullMinute;
  }

  getSeconds() {
    let fullSecond = this.currentTime % 60;
    return fullSecond;
  }
// returns the reminder after dividing by 60. Meaning, it is dividing into minutes and returning the seconds.


  computeTwoDigitNumber(value) {
    let valueString = String(value);
    if(valueString.length <= 1) {
      valueString = '0' + valueString;
      return valueString;
    } else {return valueString};
  } 
  //We convert everything into a string with 'String(value)'. If the string is smaller than 2 digits we add a 0 in front. If it is 2 digits we simply return it.
  // return ('0' + value).slice(-2); (someone else's big brain solution :O)
 
  stop() {
  clearInterval(this.intervalId);
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
  let stringlMinute = this.computeTwoDigitNumber(this.getMinutes());
  let stringSecond = this.computeTwoDigitNumber(this.getSeconds());
  return `${stringlMinute}:${stringSecond}`;

  }
}
