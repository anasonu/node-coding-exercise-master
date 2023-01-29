const router = require("express").Router();
const jsonFile = require("../mock_application.json");
const cleanDuplicates = require("../utils/cleanDuplicates");

router.get("/", (_, res, next) => {
    let objectsArr = jsonFile.versions[0].objects;
    let scenesArr = jsonFile.versions[0].scenes;

  try {
    jsonFile.versions[0].objects = (cleanDuplicates(objectsArr));
    objectsArr = jsonFile.versions[0].objects;
    objectsArr.forEach((object) => {
        object.fields = cleanDuplicates(object.fields);
    })
    
    jsonFile.versions[0].scenes = cleanDuplicates(scenesArr);
    scenesArr = jsonFile.versions[0].scenes
    scenesArr.forEach((scene) => {
        scene.views = cleanDuplicates(scene.views);
    })
    
    res.json(jsonFile)
  } catch (error) {
    next(error);
  }
});

module.exports = router;
