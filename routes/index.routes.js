const router = require("express").Router();
const jsonFile = require("../mock_application.json");
const cleanDuplicates = require("../utils/cleanDuplicates");

router.get("/", (_, res, next) => {
  const versions = jsonFile.versions;
  const objectsArr = jsonFile.versions[0].objects;
  const scenesArr = jsonFile.versions[0].scenes;

  try {
    cleanDuplicates(versions, "objects");
    cleanDuplicates(objectsArr, "fields");
    cleanDuplicates(versions, "scenes");
    cleanDuplicates(scenesArr, "views");

    res.json(versions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
