function getName() {
  let userName = document.querySelector("#userName");
  let outputName = document.querySelector("#outputName");
  let value = userName.value;
  outputName.innerHTML = "Name: " + value;
}
function getBday() {
  let birthday = document.querySelector("#birthday");
  let outputBirthday = document.querySelector("#outputBirthday");

  let value2 = birthday.value;

  let date = new Date(value2);

  let monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  let month = monthNames[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();

  outputBirthday.innerHTML = "Birthday: " + month + " " + day + ", " +year;
}
function getAge() {
  let birthday = document.querySelector("#birthday");
  let currentDate = new Date();
  let compValue = currentDate.getFullYear() - new Date(birthday.value).getFullYear();
  let outputAge = document.querySelector("#outputAge");
  let ageLabel = compValue <= 1 ? "Year Old" : "Years Old";
  outputAge.innerHTML = "Age: " + compValue + " " +ageLabel;
}

/*Date ng Each Zodiac Sign
Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20-February 18)
Pisces (February 19-March 20) 
 */

function getZodiac() {
  let birthday = document.querySelector("#birthday");
  let date = new Date(birthday.value);

  let day = date.getDate();
  let month = date.getMonth(); 

  let outputZodiac = document.querySelector("#outputZodiac");
  let zodiac = "";

  if (month == 11) { // December
    zodiac = (day < 22) ? "Sagittarius" : "Capricorn";
  } else if (month == 0) { // January
    zodiac = (day < 20) ? "Capricorn" : "Aquarius";
  } else if (month == 1) { // February
    zodiac = (day < 19) ? "Aquarius" : "Pisces";
  } else if (month == 2) { // March
    zodiac = (day < 21) ? "Pisces" : "Aries";
  } else if (month == 3) { // April
    zodiac = (day < 20) ? "Aries" : "Taurus";
  } else if (month == 4) { // May
    zodiac = (day < 21) ? "Taurus" : "Gemini";
  } else if (month == 5) { // June
    zodiac = (day < 21) ? "Gemini" : "Cancer";
  } else if (month == 6) { // July
    zodiac = (day < 23) ? "Cancer" : "Leo";
  } else if (month == 7) { // August
    zodiac = (day < 23) ? "Leo" : "Virgo";
  } else if (month == 8) { // September
    zodiac = (day < 23) ? "Virgo" : "Libra";
  } else if (month == 9) { // October
    zodiac = (day < 23) ? "Libra" : "Scorpio";
  } else if (month == 10) { // November
    zodiac = (day < 22) ? "Scorpio" : "Sagittarius";
  }
  outputZodiac.innerHTML = "Zodiac Sign: " + zodiac;
}