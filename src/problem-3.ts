{
    type CountWordOccurrences = (sentence: string, word: string) => number; // Type for the function
    const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
        const lowerCaseSentence: string = sentence.toLowerCase(); // Converted the sentence to lower case
        const lowerCaseWord: string = word.toLowerCase(); // Converted the word to lower case
        const allSentenceWords: string[] = lowerCaseSentence.split(' '); // Converted the sentence to an array of words
        let count: number = 0; // Counter for the word occurrences
        allSentenceWords.forEach((x: string) => {
            if (x === lowerCaseWord) {
                count = count + 1; // If the word is found, the counter will be incremented
            }
        })
        return count
    }

    const sentence: string = 'Daily 8 hours of sleep with 8 hours of coding  is more important than 6 hours of sleep with 10 hours of coding';
    const word: string = 'hours';
    const countHourOccurrences: number = countWordOccurrences(sentence, word);
    console.log(countHourOccurrences);
}