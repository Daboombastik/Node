const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
companies.forEach(company => {
    console.log(company.category);
});

// filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

let canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// map => create a new object from existing one

const companyNames = companies.map(company => company.name);
console.log(companyNames);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap);

// sort

const sortCompanies = companies.sort(function (a, b) {
    if (a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortCompanies);

const sortCompanies1 = companies.sort((a, b) => {
    return a.start - b.start;
});
console.log(sortCompanies1);

// reduce
const totalAges = ages.reduce((total, age) => total + age, 0);
console.log(totalAges);

const companiesTotalAge = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(companiesTotalAge);

// combine all Methods

const combineMethods = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);
console.log (combineMethods);

