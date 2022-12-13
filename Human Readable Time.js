function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainderSeconds = seconds - hours * 3600;
  remainderSeconds -= minutes * 60;
  let hoursString = hours < 10 ? '0' + hours : hours;
  let minutesString = minutes < 10 ? '0' + minutes : minutes;
  let secondsString =
    remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds;
  return hoursString + ':' + minutesString + ':' + secondsString;
}

console.log('0: ', humanReadable(0));
console.log('59: ', humanReadable(59));
console.log('60: ', humanReadable(60));
console.log('90: ', humanReadable(90));
console.log('3599: ', humanReadable(3599));
