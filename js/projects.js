(async function loadProjects() {
  const data = await fetch("https://greenbrainbe.herokuapp.com/api/v1/projects")
    .then(response => response.json())
    .then(res => {return res.data});
  
 
  
    var element = document.getElementById("project-cards")
  let cardData = data.map(function(el){
    var card = `  <div class="col-xs-12 col-md-6 col-lg-4 col-xl-4 p-2">
    <div class="card col-12 shadow  text-center" >
    <div class="card-body bg-white pb-0">
    <h5 class=" " style="font-size: small; text-black-50"><a href="#">${el.metadata.topic}</a></h5>
    <p class="small text-left"><span class="font-weight-bold">Course:</span> ${el.metadata.course} <span class="font-weight-bold">Pages:</span> ${el.metadata.pages} <span class="font-weight-bold">Research Date:</span> ${el.metadata.month_of_research}, ${el.metadata.year_of_research}</p>
    </div>
    </div> 
    </div>`;
  return card;
  });
  element.innerHTML = cardData.join('\n');
  
  })();
  