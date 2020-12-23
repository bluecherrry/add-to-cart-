var count = 1;
var countEl = document.getElementById("demo");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }  
}







