function adicAnim() {
    var animeFav = document.getElementById("animeImg").value;
    var animeLink = document.getElementById("animeLink").value;
    if (
      animeFav.endsWith(".webp") ||
      animeFav.endsWith(".jpeg") ||
      animeFav.endsWith(".jpg") ||
      animeFav.endsWith(".png")){
    
      listAnimesNaTela(animeFav,animeLink);
    } else {
      console.error("Endereço de anime inválido");
    }
    document.getElementById("animeImg").value = "";
    document.getElementById("animeLink").value = "";
  }
  
  function listAnimesNaTela(animeFav,animeLink) {
    var elementAnimeFav = "<a href=" + animeLink + " target="+"_blank"+"><img src=" + animeFav + "></a>";
    var elementListAnimes = document.getElementById("listAnimes");
    elementListAnimes.innerHTML = elementListAnimes.innerHTML + elementAnimeFav;
  }
  