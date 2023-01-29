function cleanDuplicates(array) {
  const unique = array.filter((object, index) => {
    return (
      array.findIndex((item) => {
        return item.key === object.key;
      }) === index
    );
  });

  return unique;
}

module.exports = cleanDuplicates;