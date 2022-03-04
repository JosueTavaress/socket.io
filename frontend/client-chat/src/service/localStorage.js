export const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const GetLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}