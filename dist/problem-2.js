"use strict";
{
    const removeDuplicates = (array) => {
        let newArray = []; //  new array to store the unique values
        array.forEach((x) => {
            if (newArray.includes(x) === false) {
                newArray.push(x); // If the value is not in the new array, it will be added
            }
        });
        return newArray;
    };
    const array = [1, 3, 4, 4, 3, 6, 5, 5, 6, 4, 3, 1];
    const arrWithoutDuplicateNumber = removeDuplicates(array);
    console.log(arrWithoutDuplicateNumber);
}
