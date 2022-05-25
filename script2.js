function handlebtn(){
  let val = document.getElementById("something").value
  if(val.toLowerCase() == "feline"){
    document.location = "/winner.html"
  } else {
    alert("incorrect!")
  }
}
