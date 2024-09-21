const { uniqueSort } = require("jquery");
// const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((e) => e.director);
  let uniqueDirectors = [...new Set(allDirectors)];
  return uniqueDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (e) => e.director === "Steven Spielberg" && e.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let sum = moviesArray.reduce((acc, curr) => {
    if (isNaN(curr.score)) return acc;
    return acc + curr.score;
  }, 0);
  average = sum / moviesArray.length;
  average = Math.round(average * 100) / 100;
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let onlyDramas = moviesArray.filter((e) => e.genre.includes("Drama"));
  return scoresAverage(onlyDramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const clone = [...moviesArray];
  clone.sort((a, b) => {
    if (a.year === b.year) return a.title.localeCompare(b.title);
    return a.year - b.year;
  });
  return clone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const clone = [...moviesArray];
  clone.sort((a, b) => a.title.localeCompare(b.title));
  let count = 0;
  const only20 = clone.filter((e) => {
    if (count < 20) {
      count++;
      return true;
    }
  });
  return only20.map((e) => e.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMovies = moviesArray.map((e) => {
    let minutes = calcMinutes(e.duration);
    e.duration = minutes;
    return e;
  });
  return newMovies;
}

function calcMinutes(string) {
  let hours = parseInt(string.slice(0, 1));
  let minutes = 0;
  if (string.length > 3) {
    minutes = parseInt(string.slice(3, 5));
  }
  return hours * 60 + minutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;
  const yearsArr = moviesArray.map((e) => e.year);
  uniqueYears = [...new Set(yearsArr)];
  uniqueYears.sort((a, b) => a - b);

  const avgScoresPerYear = uniqueYears.map((currYear) => {
    let count = 0;
    let sum = moviesArray.reduce((acc, curr) => {
      if (curr.year === currYear) {
        count++;
        return acc + curr.score;
      }
      return acc;
    }, 0);
    return sum / count;
  });
  let max = 0;
  let index = 0;
  avgScoresPerYear.forEach((e, i) => {
    if (e > max) {
      max = e;
      index = i;
    }
  });
  return `The best year was ${uniqueYears[index]} with an average score of ${avgScoresPerYear[index]}`;
}

