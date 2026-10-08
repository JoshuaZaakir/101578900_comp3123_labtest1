
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        // Check if the input is an array
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
            return;
        }

        // Keep strings and convert them to lowercase
        const words = mixedArray
            .filter(word => typeof word === "string")
            .map(word => word.toLowerCase());

        resolve(words);
    });
};

// Input
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Run the function for result
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
