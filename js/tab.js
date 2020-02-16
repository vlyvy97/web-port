function openTab(projectName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

  }
  document.getElementById(projectName).style.display = "block";
}

  var test = document.getElementById('cbt');
// Get all buttons with class="btn" inside the container
console.log('test subject ', test)

  var btns = test.getElementsByClassName("btc");

  console.log(btns);

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function () {
      var current = btns.getElementsByClassName("active");
      console.log('curernt node: ', current);
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

    });
  }

