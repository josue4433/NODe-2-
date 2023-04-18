const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

console.log(convertTimeToWords('00:00')); // 'midnight'
console.log(convertTimeToWords('00:12')); // 'twelve twelve am'
console.log(convertTimeToWords('01:00')); // 'one o'clock am'
console.log(convertTimeToWords('06:01')); // 'six oh one am'
console.log(convertTimeToWords('06:10')); // 'six ten am'
console.log(convertTimeToWords('06:18')); // 'six eighteen am'
console.log(convertTimeToWords('06:30')); //

let years = Math.floor(seconds / SECONDS_IN_YEAR);
  seconds -= years * SECONDS_IN_YEAR;
  let days = Math.floor(seconds / SECONDS_IN_DAY);
  seconds -= days * SECONDS_IN_DAY;
  let hours = Math.floor(seconds / SECONDS_IN_HOUR);
  seconds -= hours * SECONDS_IN_HOUR;
  let minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
  seconds -= minutes * SECONDS_IN_MINUTE;

  let timeString = "";
  if (years > 0) {
    timeString += years + " year" + (years == 1 ? "" : "s") + ", ";
  }
  if (days > 0) {
    timeString += days + " day" + (days == 1 ? "" : "s") + ", ";
  }
  if (hours > 0) {
    timeString += hours + " hour" + (hours == 1 ? "" : "s") + ", ";
  }
  if (minutes > 0) {
    timeString += minutes + " minute" + (minutes == 1 ? "" : "s") + ", ";
  }
  timeString += seconds + " second" + (seconds == 1 ? "" : "s");
  return timeString;
