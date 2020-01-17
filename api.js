const app = document.getElementById('root')

const logo = document.createElement('img')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://www.anapioficeandfire.com/api/characters', true)

request.onload = function() {

  var data = JSON.parse(this.response)
  
  // app.get("/results",function(req,res)){
  //   var query=req.query.search();
  //   var url="https://www.anapioficeandfire.com/api/books/?s="+query;
  //   request("url",function(error,response,body)){
  //       if(!error && response.statusCode==200){
  //           var data=JSON.parse(body)
  //           res.render("results",{data:data});
  //       }
  //   }
  // }
  


  if (request.status >= 200 && request.status < 400) {
  data.forEach(characters => {

    var count=1;
  const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = characters.name

      // var a = document.createElement('a');
      // var link = document.createTextNode(h1); 
      // a.appendChild(link);
      // a.href = "https://www.anapioficeandfire.com/api/characterss";   
      container.appendChild(card)
      card.appendChild(h1)
})
}
else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }

}
// Send request
request.send();