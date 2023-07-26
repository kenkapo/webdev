1. key property is a special property. We cannot hold this prop. If we want the value of this prop, then we will have to make another prop with the same value.

//**All of them are higher order functions**
var numbers=[1,2,3,4,5]
//Map -Create a new array by doing something with each item in an array.
eg:var nn=n.map(function (x)
             {
                 return x*2;
             });
console.log(nn); //[2, 4, 6, 8, 10]

//Filter - Create a new array by keeping the items that return true.
eg:nn=n.filter(function(x)
            {
                return x>2;
            });
console.log(nn);// [3,4,5]

//Reduce - Accumulate a value by doing something to each item in an array.
eg:nn=n.reduce(function(s,x)
            {
                return s+x;
            });
console.log(nn);// 15

//Find - find the first item that matches from an array.
eg:nn=n.find(function(x)
            {
                return x>3;
            });
console.log(nn);// 4->first element >3

//FindIndex - find the index of the first item that matches.
eg:nn=n.findIndex(function(x)
            {
                return x>3;
            });
console.log(nn);// 3->index of 4
