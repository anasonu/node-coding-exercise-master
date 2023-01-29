function cleanDuplicates(array, key) {
  array.forEach((element) => {
    element[`${key}`] = element[`${key}`].filter((object, index) => {
      return (
        element[`${key}`].findIndex((item) => {
          return item.key === object.key;
        }) === index
      );
    });
    return element[`${key}`];
  });
}

module.exports = cleanDuplicates;
