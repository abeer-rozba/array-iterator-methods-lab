const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

const travelMethods = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

const devs = [
  { name: 'Alex', year: 1988 },
  { name: 'Dani', year: 1986 },
  { name: 'Matt', year: 1970 },
  { name: 'Wes', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Exercise 1:
let veryOldInventors = []

veryOldInventors = inventors.filter((inventor) => {
  return (inventor.year>=1500 && inventor.year<=1599)
})

console.log(veryOldInventors);

// Exercise 2:
let inventorNames = []
inventorNames = inventors.map((inventor) => {
  return {first: inventor.first, last: inventor.last}
})

console.log(inventorNames);

// Exercise 3:
let sortedByBirthYear = []

sortedByBirthYear = inventors.sort((a, b) => {
  if (a.year < b.year)
  { return -1 }
  if (a.year > b.year)
  { return 1 }
  else { return 0 }
})

console.log(sortedByBirthYear);

// Exercise 4:
let inventorNameAda = {}

inventorNameAda = inventors.find((inventor) => {
  return inventor.first === "Ada"
})

console.log(inventorNameAda);

// Exercise 5:
let firstLast = []

firstLast = people.map((person) => {
  const splitted = person.split(',')
  const last = splitted[0]
  const first = splitted[1]
  return `${first} ${last }`
})

console.log(firstLast);

// Exercise 6:
let isAdultPresent = null

isAdultPresent = devs.some((dev) => {
  const age = 2024 - dev.year
  return age >= 18
})

console.log(isAdultPresent);

// Exercise 7:
let isEveryone19OrOlder = null

isEveryone19OrOlder = devs.every((dev) => {
  const age = 2024 - dev.year
  return age>=19
})

console.log(isEveryone19OrOlder);

// Exercise 8:
let commentById = {}

commentById = comments.find((comment) => {
  return comment.id === 823423
})

console.log(commentById);

// Exercise 9:
let index = null

index = comments.findIndex((idx) => {
  return idx.id === 123523
})

console.log(index);

// Exercise 10:
let totalYearsLived = inventors.reduce((accumulator, inventor) => {
  const lifespan = inventor.passed - inventor.year
  return accumulator+lifespan
}, 0)

console.log(totalYearsLived);