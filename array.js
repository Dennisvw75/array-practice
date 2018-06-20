const shavingBrands = ['Taylor of old Bondstreet', 'Proraso', 'Mondial', 'Bergamotto', 'Acca Kappa', 'Edwin Jagger', 'Crabtree & Evelyn', 'Dr Harris', 'St James of London'];

const companies = [{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


shavingBrands.push('Truefitt&Hill');

// console.log(shavingBrands.length);
// console.log(typeof shavingBrands);
// shavingBrands.forEach(function (item, index) {
//   if (item === 'Acca Kappa') {
//     item = item.toUpperCase();
//   } else {
//     item = item.toLowerCase();
//   }
//   // console.log(index);
//   console.log(item, index);
// })
// shavingBrands.sort();
// console.log(shavingBrands);


// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);// Es5
// }

// ForEach
// companies.forEach(function (company) {
//   console.log(company.name);
// });

// Filter es5
// let canDrink = [];
// for (let i = 0; ages.length; i++) {
//   if (ages[i] > 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// With arrow functions
// const canDrink = ages.filter(age => age >= 21);

// Filter retail companies es5
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// Filter retail companies es6 arrow function
const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// Map
///Create array of company names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

console.log(testMap);