
function updateDriverWithKeyAndValue(driver='sam', key, value){
  
  const newObj = { ...driver };
  newObj[key]=value
  return newObj
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
 
  return driver;
}
function deleteFromDriverByKey(driver, key){
  
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];

  return driver;
}
console.log(updateDriverWithKeyAndValue({name:"sam"}, "addres", "value"))