function cleanDuplicates(array, key) {
  array.forEach((item) => {
    item[`${key}`] = item[`${key}`].filter((object, index) => {
      return (
        item[`${key}`].findIndex((item) => {
          return item.key === object.key;
        }) === index
      );
    });
    return item[`${key}`];
  });
}

module.exports = cleanDuplicates;
