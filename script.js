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


// //http request
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log(this.response);
//       }
//     };
//     xhttp.open("GET", "https://greenbrainbe.herokuapp.com/api/v1/lecturenotes", true);
//     xhttp.send();
//   }