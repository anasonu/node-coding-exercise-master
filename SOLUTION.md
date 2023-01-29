## Node Coding Exercise Master

### Run App
yarn run dev

### Localhost
[Localhost](http://localhost:5005/api)

### Run tests
yarn run test

### Test Coverage
yarn test --coverage

## Explanation

### cleanDuplicate Function
This function receives an array and a string that will be the object key. The logic works this way:
- First, it iterates through the main array of objects. For each element of this array, it finds the key we need from the parameter the function received. 
- Second, now inside the object key we needed and with the .filter() method, it looks for the elements which index in the array equals the one we find with .findIndex(). This last method returns the index of the first element in an array that meets the condition, so if the indexes are the same, it means that specific object doesn't exist in the array. But if the condition turns out to be false, then the element already exists and won't be included.

[cleanDuplicate Function](./utils/cleanDuplicates.js)

### index.routes
There is a GET route that calls the cleanDuplicate() function several times:
1. It passes the VERSIONS array from the JSON and cleans the duplicates from the OBJECTS key.
2. It passes the OBJECTS array inside versions so it cleans the duplicates from FIELDS of each object.
3. It passes the VERSIONS array again to clean the duplicate SCENES.
4. It passes the SCENES array to eliminate any duplicate VIEWS of each scene.

[Index Routes](./routes/index.routes.js)

### Tests
The tests are focused on the cleanDuplicates() function. 
There is a mockArray with a sample array that the tested function will be receiving and an expectedArray with a sample array that should be the expected result of the test.

For the test, the cleanDuplicates() function receives the mockArray array and the string "objects" as arguments.

[Tests](./utils/cleanDuplicates.test.js)