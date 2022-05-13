function toggleNav() {
  var wrapper = document.getElementById("wrapper");
  
  if(wrapper.classList.contains("open")){
    wrapper.classList.remove("open")
  } else {
    wrapper.classList.add("open");
  };
}
<script>
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
</script>
