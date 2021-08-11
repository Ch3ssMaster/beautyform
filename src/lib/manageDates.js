export const getDateRange = (startDate, num) => {
  let current = new Date(Date.now());
  let year = current.getFullYear() - num;
  let month = "01";
  let day = "01";
  if (!startDate) {
    month = current.getMonth();
    if (month < 10) {
      month = `0${month}`;
    }
    day = current.getDay();
    if (day < 10) {
      day = `0${day}`;
    }
  }

  return `${year}-${month}-${day}`;
};

export const dateToTime = (date) => {
  let newDate = new Date(date);
  return newDate.getTime();
};

export const compareDateAndAge = (date, age) => {
  if (
    date === undefined ||
    typeof date === "object" ||
    age === undefined ||
    typeof age === "object" ||
    (date.length === 0 && age.length === 0)
  ) {
    return true;
  } else {
    let dateYear = new Date(date).getFullYear();
    let ageYear = new Date(Date.now()).getFullYear() - age;
    return dateYear === ageYear;
  }
};
