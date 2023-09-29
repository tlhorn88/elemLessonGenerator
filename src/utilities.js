// SHUFFLES AN ARRAY USING FISHER-YATES ALGORITHM
export function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// SELECTS A SPECIFIED NUMBER OF RANDOM ITEMS FROM AN ARRAY
export function selectRandomItems(array, count) {
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, count);
}
