const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
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

/* -------forEach (loop through array!)----------*/
//forEach is better than for loop to loop through data
for(let i=0; i<companies.length; i++){
    console.log(companies[i]);
}

// forEach shows cleaner code
companies.forEach(function(company){
    console.log(company.name);
    
});

/* -------filter----------*/
// for loop 
let canDrink= [];
for(let i=0; i < ages.length; i++) {
    if(ages[i]>=21){
        canDrink.push(ages[i]);
    }

};
console.log(canDrink)

//filter 
const canDrinkFilter =ages.filter(function(age){
    if(age>=21){
        return true;
    }
});


// filter with arrowfunction
const canDrinkFilterArrow =ages.filter(age =>age>=21);
console.log(canDrinkFilterArrow);

//filter retail companies
const retailCompanies = companies.filter(company => company.category==="Retail");
console.log(retailCompanies);

//filter companies that started in the 80s
const eightiesCompanies = companies.filter(company => company.start>=1980 && company.start<1990);
console.log(eightiesCompanies);

//filter companies that lasted 10 years
const tenYearsCompanies = companies.filter(company => (company.end-company.start)>=10);
console.log(tenYearsCompanies);

/* -------map (creates a new array from filtered var----------*/

// new array of company names
const companyNames =companies.map(company => company.name);
console.log(companyNames)

// new array of company and dates
const companyInfo = companies.map(function(company){
return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(companyInfo)

const companyInfoArrow = companies.map(company =>`${company.name} [${company.start} - ${company.end}]`);

console.log(companyInfoArrow)

const squareRoot = ages.map(age=> Math.sqrt(age));
console.log(squareRoot);

const squareRootTimesTwo = ages.map(age=> Math.sqrt(age))
.map(age=>age*2)
console.log(squareRootTimesTwo);

/* -------sort ----------*/

// sort companies by start year
const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start> c2.start) {
        return 1;
    }else{
        return -1;
    }
});
console.log(sortedCompanies)

const sortedCompaniesArrow = companies.sort((c1,c2) =>c1.start> c2.start?1:-1);
console.log(sortedCompaniesArrow)

// sort numbers
const sortAges = ages.sort((a,b)=> a-b);
console.log(sortAges)


/* -------reduce (Never forget 0 for total)----------*/

// with for loop sum up all ages
let ageSum=0
for(let i=0; i <ages.length; i++ ){
    ageSum += ages[i];
};

console.log(ageSum);

// with reduce sum all ages
const AgeSumReduce =  ages.reduce((total, age)=> total + age, 0);
console.log(AgeSumReduce);

// sum year range of companies
const yearRange= companies.reduce((total,company)=> total+(company.end-company.start),0);
console.log(yearRange);

/* -------COmbined methods----------*/
const combined = ages
.map(age => age*2)
.filter(age => age>=40)
.sort((a,b)=> a-b)
.reduce((total,age) => total + age, 0)

console.log(combined);