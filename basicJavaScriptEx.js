var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
  console.log(someObj[someProp]); // "John"

/**ADDING A PROPERTY TO AN OBJECT */
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = "woof";
  console.log(myDog)

/** USING OBJS FOR LOOKUPS */
function phoneticLookup(val) {
    
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  
  var result = lookup[val];
  return result;
  }
  
  console.log(phoneticLookup("charlie"));

  /** TESTING OBJS FOR PROPERTIES */
  function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    } else {
    return "Not Found";
    }
  }

  /** MANIPULATING Complex OBJS
   * The object has various pieces of metadata about an album. 
   * Objects hold data in a property, which has a key-value format. 
   * key=artist value=daft punk (JSON used to store data) */
  const myMusic = [
    {
      "artist": "Daft Punk",
      "title": "is ok",
      "release_year": 2010,
      "formats": [
        "CD",
        "Cassette",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Billy the man",
      "title": "moonlight",
      "release_year": 1989,
      "formats": [
        "CD",
        "LP"
      ]
    }
  ];

  /**ACCESSING NESTED OBJECTS */
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);

  /** ACCESSING NESTED ARRAYS */
  var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  var secondTree = myPlants[1].list[1];

  /**Iterate Through an Array with a For Loop*/
  /** the last index of an array is length - 1 */
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
   total += myArr[i];
}

console.log(total);
  
/**NESTING FOR LOOPS */
function multiplyAll(arr) {
    var product = 1;
    
    for (var i=0; i < arr.length; i++) {
      for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
      console.log(product);
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);  

  /** REPLACE LOOPS USING RECURSION */
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) 
      * 
      arr[n - 1];
    }
  }

  console.log(multiply([1,6,3], 3));

  function sum(arr, n) {
      if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
  }
  
  console.log(sum([1,3,4], 5));

/** PROFILE LOOKUP */
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName == name) {
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];        
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
console.log(lookUpProfile("Kristian", "likes"));
console.log(contacts[3].number);
console.log(contacts[3].firstName);

/** Math.floor(Math.random() * 10); > random number between 0 and 9 | Math.floor() rounds the number down to its nearest whole number. */
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(3,10));

/** The parseInt() function parses a string and returns an integer. 
 * parseInt(string, radix) the radix, specifies the base of the number in the string.
*/

//a == b ? "Equal" : "Not Equal"; ternary operator
function checkSign(num) {
  return num > 0 ? "positive"
   : num < 0 ? "negative" 
   : "zero"
 }

 /** RECURSION COUNT DOWN */
 function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);;
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(5));

/** RECURSION RANDOM NUMBERS */
function rangeOfNumbers(startNum, endNum) {
  if(startNum == endNum){
    return [startNum];
  } else {
    const newArr = rangeOfNumbers(startNum, endNum -1)
    newArr.push(endNum);
    return newArr;
  }
};

console.log(rangeOfNumbers(2,9));