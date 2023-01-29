function cleanDuplicates(array, key) {
  const cleanArray = array.forEach((item) => {
    item[`${key}`] = item[`${key}`].filter((object, index) => {
      return (
        item[`${key}`].findIndex((item) => {
          return item.key === object.key;
        }) === index
      );
    });
    return item[`${key}`];
  });

  return cleanArray;
}

module.exports = cleanDuplicates;
