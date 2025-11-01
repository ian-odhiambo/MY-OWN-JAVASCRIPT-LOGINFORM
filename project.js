const companies = [
    {name:"Company one", category:"Finance", Start:1981, end:2003},
    {name:"Company Two", category:"Retail", Start:1992, end:2008},
    {name:"Company Three", category:"Auto", Start:1999, end:2007},
    {name:"Company Four", category:"Retail", Start:1989, end:2010},
    {name:"Company Five", category:"Technology", Start:2009, end:2014},
    {name:"Company Six", category:"Finance", Start:1987, end:2010},
    {name:"Company Seven", category:"Auto", Start:1986, end:1996},
    {name:"Company Eight", category:"Technology", Start:2011, end:2016},
    {name:"Company Nine", category:"Retail", Start:1981, end:1989}
]
//  RETAIL COMPANIES AND ITS SHORTHAND USING ARROW FUNCTION
// const retailCompanies = companies.filter(function(company){
//     if(company.category=== 'Retail'){return true}
// })

// console.log(retailCompanies)

//alternatively this can be shortened using arrow
// functions 


const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//FINANCE COMPANIES AND ITS SHORTHAND USING ARROW FUNCTIONS
// const financeCompanies = companies.filter(function(company){
//     if(company.category === "Finance"){return true}
// })
// console.log(financeCompanies)

const financeCompanies = companies.filter(company => company.category === "Finance");
console.log(financeCompanies)

//AUTOCOMPANIES AND ITS SHORTHAND USING ARROW FUNCTIONS

// const autoCompanies = companies.filter(function(company){
//     if(company.category === "Auto") {return 'true'}
// })
// console.log(autoCompanies)

const autoCompanies = companies.filter(company => company.category === 'Auto')
console.log(autoCompanies)

//TEC- COMPANIES AND THEIR SHORTHAND USING ARROW FUNCTIONS 
// const tecCompanies = companies.filter(function(company){
//     if(company.category === "Technology") {return true}
// })
// console.log(tecCompanies)

const tecCompanies = companies.filter(company => company.category === 'Technology')
console.log(tecCompanies)

//COMPANIES THAT STARTED IN THE 80'S
//using the filter method of array and then using it with arrow functions
// const eightysCompany = companies.filter(function(company){
//     if(company.Start >= 1980 && company.Start < 1990){return true};
// });

// console.log(eightysCompany)

const eightysCompany = companies.filter(company => (company.Start >= 1980 && company.Start < 1990));
console.log(eightysCompany)

//HOW MANY NUMBER OF YEARS THE COMPANIES HAVE LASTED IN THE GAME
// const companyTimeSpan = companies.filter(function(company){
//     if((company.end - company.Start) < 10){return `${company.name} ${company.category} ${company.Start} ${company.end}`};

//     if((company.end - company.Start) >= 10 && (company.end - company.Start) < 15){return `${company.name} ${company.category} ${company.Start} ${company.end}`};

//     if((company.end - company.Start) >= 15 && (company.end - company.Start) < 20){return `${company.name} ${company.category} ${company.Start} ${company.end}`};
    
//     if((company.end - company.Start) >= 20 && (company.end - company.Start) < 25){return `${company.name} ${company.category} ${company.Start} ${company.end}`};
// });

// console.log(companyTimeSpan)
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

const canDrink = ages.filter(age => age >= 21 );

console.log(canDrink)


//for
// for(i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }


//forEach
// companies.forEach(function(company){console.log(company.name)})

//filters- filters out the index even the whole array 
//what ive applied in the for loop statement is the same way i will apply when using the filters 

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink)


//i would like to rewrite the same code using the filter method o array and then shorten it further with arrow functions
//doing the same thing i would have done using filter method
let accolyte = [];
let fledging = [];
let pioneer = [];
for(let i = 0; i < companies.length; i++){
    if((companies[i].end - companies[i].Start) <= 10 ) {
        accolyte.push(companies[i].name);

    }else if((companies[i].end - companies[i].Start) >10 && (companies[i].end - companies[i].Start) <=21){
        fledging.push(companies[i].name);

    }else if((companies[i].end - companies[i].Start) > 21 && (companies[i].end - companies[i].Start) <=30) {
        pioneer.push(companies[i].name);
    }
}

console.log(accolyte);
console.log(fledging);
console.log(pioneer);

//USING MAP
//it returns an array from an array

// const companyNames = companies.map(function(company){
//     return company.name
// })
// console.log(companyNames)

//shorthand using arrow functions
const companyNames = companies.map(company => company.name);
console.log(companyNames)

// const testMap = companies.map(function(company){
//     return `${company.name} ${company.Start} - ${company.end}`
// })
// console.log(testMap)

const testMap = companies.map(company => `${company.name} ${company.Start} - ${company.end}`)

console.log(testMap)


// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare)
// const agesSquare = ages.map(function(age){
//     return Math.sqrt(age)
// });

// const agesTimesTwo = ages.map(function(age){
//     return age*2
// })
// console.log(agesSquare)
// console.log(agesTimesTwo)

//the shorthands for each using arrow functins with map. ive combined the two expressions rom the two maps, to end with these .Map is really powerul and can be used or manipulation o data

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age*2);

console.log(ageMap)
//SORTED
// const sortedCompanies = companies.sort(function(company1, company2){
//     if(company1.Start > company2.Start) {return 1}
//     else{return -1}
// });
// console.log(sortedCompanies)
//a shorthand using arrow functions
const sortedCompanies = companies.sort((company1, company2 ) => (company1.Start > company2.Start) ? 1 : -1);
console.log(sortedCompanies);

