const coding = ["js","ruby","python","cpp"]
  // using normal function 



// coding.forEach( function (item) {
//         console.log(val);
// }  )


// coding.forEach( (value) => {
//     console.log(value);
// } )    using arrow function 

// passing function as a arguement in for each loop

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// array having more than 1 objects 
const myCode = [
    {
        languageName : "javascript",
        languageFile : ".js"
    },
    {
        languageName : "java",
        languageFile : ".java"
    }
    ,
    {
        languageName : "python",
        languageFile : ".py"
    }
]


myCode.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFile);
} )
