function toggleNav() {
  var wrapper = document.getElementById("wrapper");
  
  if(wrapper.classList.contains("open")){
    wrapper.classList.remove("open")
  } else {
    wrapper.classList.add("open");
  };
}
