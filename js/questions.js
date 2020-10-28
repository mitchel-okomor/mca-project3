(async function loadQuestions() {
  const data = await fetch("https://greenbrainbe.herokuapp.com/api/v1/pastquestions")
    .then(response => response.json())
    .then(res => {return res.data});



    //get random colors
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  
    var element = document.getElementById("question-cards")
  let cardData = data.map(function(el){
    var card = `<div class="col-xs-12 col-md-6 col-lg-3 col-xl-3 p-2">
    <div class="card col-12 shadow  text-center" >
      <div class="card-header text-white text-capitalize " style="background-color:${getRandomColor()}">${el.course}</div>
      <div class="card-body bg-white pb-0">
    <h5 class="card-title "><a href="#">${el.title}</a></h5>
    <p class=" ">${el.school}</p>
    <p class="">${el.level}level</p>
  </div>
  </div> 
  </div>`;
  return card;
  });
  element.innerHTML = cardData.join('\n');
  
  })();
  