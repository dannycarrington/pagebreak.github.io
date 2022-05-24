function toggleNav() {
  var wrapper = document.getElementById("wrapper");

  if (wrapper.classList.contains("open")) {
    wrapper.classList.remove("open")
  } else {
    wrapper.classList.add("open");
  };
}
const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}
for (i = 0; i <= 90; i++) {
  if (i == 54) { // the 69th button
    document.getElementById("puzzle").innerHTML += `<button class="our-btn" onClick="alert('HAH! You though you got lucky huh?')">Button</button>`
  }
  else { // the normal buttondiv 
    color = "black"
    if (i == 61){
      color = "black"
    }
    else if (isPrime(i)) {
      color = "red"
    }
      document.getElementById("puzzle").innerHTML += `<button class="our-btn" style="border-color: ${color}"" onClick="alert('Could be this one?')">Button</button>`
  }
  
}


function handlebtn(){
  let val = document.getElementById("value").value
  if(val.toLowerCase() == "australia"){
    document.location = "/winner.html"
  } else {
    alert("incorrect!")
  }
}
