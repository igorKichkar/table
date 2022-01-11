function isNumber(num) {
  return !isNaN(num);
}

const checkField = (field, query) => {
  if (field === "amount") {
    if (Number.isInteger(+query)) {
      return true;
    } else {
      return false;
    }
  } else if (field === "distance") {
    if (isNumber(query)) {
      return true;
    } else {
      return false;
    }
  } else return true;
};
export default checkField;
