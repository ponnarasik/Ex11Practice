/*let add = function(a, b) {
   return a + b;
};

console.log(add(1, 1)); */





/*let f1 = function(str) {
   return str + str;
};
f1("abcd");
let f2 = f1;*/

/*let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
   return n*2;
};

let doubled = nums.map(timesTwo);

console.log(nums);
console.log(doubled);*/

let nums = [3.14, 42, 4811];

let doubled = nums.map(function (n) {
   return n*2;
});

console.log(doubled);