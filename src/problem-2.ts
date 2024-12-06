{
    type Array = number[]; // Type for the array
    const removeDuplicates = (array: Array): Array => {
        let newArray: Array = []; //  new array to store the unique values
        array.forEach((x: number) => {
            if (newArray.includes(x) === false) {
                newArray.push(x); // If the value is not in the new array, it will be added
            }
        })
        return newArray;
    };
    const array: Array = [1, 3, 4, 4, 3, 6, 5, 5, 6, 4, 3, 1];
    const arrWithoutDuplicateNumber: Array = removeDuplicates(array);
    console.log(arrWithoutDuplicateNumber);

}