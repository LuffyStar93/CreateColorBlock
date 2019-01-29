

    var nbblocks = document.getElementById("nb_blocks");
    var color = document.getElementById("color_blocks");
    var block = document.getElementById("blocks");
    var supprimer = document.getElementById("delete_blocks");
    var creer =  document.getElementById("create_blocks");

    function newblock(){
  
      for(var i = 0; i < nbblocks.value; i += 1){
    var newDiv = document.createElement("div");
    block.appendChild(newDiv);
    newDiv.classList.toggle("newdiv");
    newDiv.style.background = color.value;
    newDiv.addEventListener("click",select);
      };
      
      var divSelected = document.querySelectorAll(".active");
      for(var i =0; i <divSelected.length; i++){
        divSelected[i].style.background = color.value;
      };
  };

      function erase(){
      while (block.firstChild){
        block.removeChild(block.firstChild);
        }
      };
       supprimer.addEventListener("click", erase);
   
   

  function select(){
    this.classList.toggle("active");
  }

 
  creer.addEventListener("click", newblock);