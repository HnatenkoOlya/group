// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).
function getCode (min) {
 if (min > 0 && min < 15) {
    return "first";
 }  
 if (min >= 15 && min < 30) {
    return "second";
 }  
 if (min >= 30 && min < 45) {
    return "third";
 }  
 if (min >= 45 && min <= 59) {
    return "fourth";
 }  
  return "Incorrect";
}
console.log(getCode(60))