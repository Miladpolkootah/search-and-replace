function myReplace(str, before, after) {
  let myRegex = /^[A-Z]/;
  let testBefore = myRegex.test(before);
  let myArr = str.split(/\W+/);
  let tru = myArr.indexOf(before);
  if(testBefore){
    let newAfter = after.replace(/^[^A-Z]/, after[0].toUpperCase());
    myArr.splice(tru, 1, newAfter);
    return myArr.join(' ');
  }else{
    let newAfter = after.replace(/^[^a-z]/, after[0].toLowerCase())
    myArr.splice(tru, 1, newAfter);
    return myArr.join(' ');
  }
};

console.log(myReplace("I think we should look up there", "up", "Down"));