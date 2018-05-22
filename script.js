const letters = document.getElementsByTagName("li");

const word = "ТЫПИДОР";

const speeds = [170, 100, 150, 70, 100, 80, 100];

for (let i = 0; i < letters.length; i++) {
  setInterval(() => {
    if (letters[i].innerText === word[i]) {
      return;
    }

    if (letters[i].innerText != " ") {
      let char = letters[i].innerText.charCodeAt(0);
      let sign = 0;
      if (char < word.charCodeAt(i)) {
        sign = 1;
      } else {
        sign = -1;
      }
      letters[i].innerText = String.fromCharCode(char + sign);
    }
  }, speeds[i]);
}
