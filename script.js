function toggleDisplay (id){

   var el = document.getElementById(id);
   if(el.classList.contains("hide")){
       console.log("contained");
       el.classList.add("show")
       el.classList.remove("hide");
   }else{
      el.classList.add("hide");
      el.classList.remove("show")
}

}

// close the filter spinner

(function() {
    var target = document.querySelectorAll("filter-options");

   })();