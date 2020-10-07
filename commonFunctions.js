function countConsecutivePairs(ar){
//func([1,2,5,8,-4,-3,7,6,5]) = 3... there are consecutive 3 pairs.
//unsolved... https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
 counter = 0;
 evenAr = [];
 oddAr = [];
 if (ar.length % 2 == 0) {
 evenAr = ar;  
 }
 else {oddAr = ar}
 for (i=0; i<evenAr.length; i+=2) {
   x=ar[i];
   y=ar[i+1];
   if (Math.abs(x)-Math.abs(y) ==1 || Math.abs(y)-Math.abs(x) ==1) {counter++}     
 };
for (i=0; i<=oddAr.length-1; i+=2) {
   x=ar[i];
   y=ar[i+1];
   if (Math.abs(x)-Math.abs(y) ==1 || Math.abs(y)-Math.abs(x) ==1) {counter++}     
 };
 return counter;  
};

function solve(a,b){
//forgot what this is for	
    if (a.length < b.length || a.length == b.length) {
      return true
    }
    else {return false}
}

var isSquare = function(n){
  if (n < 0) { return false};
  if (n == 0) { return true};
  if (n > 0) {
    var holder = Math.sqrt(n)
    return Number.isInteger(holder)
  };
}