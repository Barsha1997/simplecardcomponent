function toggle() {
    toggleItem = document.getElementsByClassName("hide");
    // btn = document.getElementsByClassName("card-btn")[0];
  
    for (i = 0; i < toggleItem.length; i++) {
      if (toggleItem[i].style.display === "none") {
        toggleItem[i].style.display = "block";
        // btn.innerText = 'learn less'
      }
      else {
        toggleItem[i].style.display = "none";
        // btn.content = 'learn more';
      }
    }
  }