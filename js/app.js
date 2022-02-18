let date = new Date();
let dayOfTheWeekNumber = date.getDay();
let nameOfDay;

switch (dayOfTheWeekNumber) {
  case 0:
    nameOfDay = 'Sunday';
    break;
  case 1:
    nameOfDay = 'Monday';
    break
  case 2:
    nameOfDay = 'Tuesday';
    break;
  case 3:
    nameOfDay = 'Wensday';
    break;
  case 4:
    nameOfDay = 'Thursday';
    break;
  case 5:
    nameOfDay = 'Friday';
    break
  case 6:
    nameOfDay = 'Saturday';
    break;
}


let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = nameOfDay;
