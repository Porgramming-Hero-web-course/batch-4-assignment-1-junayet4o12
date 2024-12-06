{
    type arrType = number[];
    const sumArray = (array: arrType): number => {
        return array.reduce((acc, value) => acc + value, 0);
    }
    const array: arrType = [2, 3, 4, 23, 4, 5, 67, 5, 4];
    const sum = sumArray(array);
    console.log(sum);
}