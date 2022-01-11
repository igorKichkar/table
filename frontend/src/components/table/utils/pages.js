export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  let rezult = [];
  for (let i = 0; i < totalPages; i++) {
    rezult.push(i + 1);
  }
  return rezult;
};
