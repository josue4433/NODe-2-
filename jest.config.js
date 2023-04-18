function convertTimeToWords(timeString) {
    const timeArr = timeString.split(':');
    const hour = parseInt(timeArr[0]);
    const minute = parseInt(timeArr[1]);
    const hourWord = hourToWord(hour);
    const minuteWord = minuteToWord(minute);
  
    if (hour === 0 && minute === 0) {
      return 'midnight';
    } else if (hour === 12 && minute === 0) {
      return 'noon';
    } else if (hour < 12) {
      return `${hourWord} ${minuteWord} am`;
    } else {
      return `${hourWord} ${minuteWord} pm`;
    }
  }
  
  function hourToWord(hour) {
    const hourWords = [
      'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];
    return hourWords[hour % 12];
  }
  
  function minuteToWord(minute) {
    if (minute === 0) {
      return 'o\'clock';
    } else if (minute < 10) {
      return `oh ${digitToWord(minute)}`;
    } else if (minute < 20) {
      return digitTeenToWord(minute);
    } else {
      const tenMinuteWord = digitTenToWord(parseInt(minute / 10) * 10);
      const oneMinuteWord = digitToWord(minute % 10);
      return `${tenMinuteWord} ${oneMinuteWord}`;
    }
  }
  
  function digitToWord(digit) {
    const digitWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return digitWords[digit];
  }
  
  function digitTeenToWord(digit) {
    const teenWords = [
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen'
    ];
    return teenWords[digit - 10];
  }
  