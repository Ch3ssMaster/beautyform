export const validateName = (name) => {
  return name.length > 5;
};

export const validatePassword = (password) => {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return re.test(password);
};

export const passwordsMatch = (password, password2) => {
  return password === password2;
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
