import { dateToTime } from "./manageDates";

export const validateName = (name) => {
  return name.length > 5;
};

export const validatePassword = (password) => {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return re.test(password);
};

export const passwordsMatch = (password, password2) => {
  return password === password2;
};

export const validateDate = (date, minDate, maxDate) => {
  if (date === undefined || typeof date === "object") {
    return true;
  } else {
    let re = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/gm;
    let userDate = dateToTime(date);
    return (
      re.test(date) &&
      userDate >= dateToTime(minDate) &&
      userDate <= dateToTime(maxDate)
    );
  }
};

export const validateAge = (age) => {
  return age >= 18 && age <= 100;
};

export const isEmpty = (str) => {
  if (str === undefined || typeof str === "object") {
    return true;
  } else {
    return str.length === 0 || !str.trim();
  }
};
