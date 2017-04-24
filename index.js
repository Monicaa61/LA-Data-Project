function getData(){
 // var imageArray =[
 //   'https://media.giphy.com/media/ewJLTlxmfRSbS/giphy.gif' ,
 //   'https://media.tenor.co/images/8ec26bb3a614c2c8ce3e72f36ac530ea/tenor.gif' ,
 //   'http://68.media.tumblr.com/97c3d359bfec603b200669935a673e83/tumblr_inline_mkpjfc4E351qz4rgp.gif' , 
 //   'http://i.imgur.com/E8Ng9Zz.gif'
 //   
 //   ]
  
  
    var endpoint='https://data.lacity.org/resource/v87k-wgde.json'
    var searchYear = document.getElementById('year').value
    var year = searchYear[searchYear.length - 2] + searchYear[searchYear.length - 1]
    console.log(year)
    
    fetch(endpoint)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
        
        var finalHTML = ''
        
        var filteredData = json.filter(function(item){
            for (var prop in item){
                if (prop.match(year)) {
                    return true
                }
            }
        })
        
        filteredData.forEach(function(item){
        //  var randomNumber=Math.floor(Math.random() * imageArray.length)
        //  finalHTML +=`<img src=${imageArray[randomNumber]}`
        var cardItem = 
        `
            <div class="col s6 m4">
              <div class="card">
                <div class="card-image">
                  <img id="photo" src="https://s-media-cache-ak0.pinimg.com/564x/54/77/a7/5477a77e0e0546eac9baf3320b83f8aa.jpg">${searchYear}</span>
                </div>
                <div class="card-content">
                  <p>In the zip ${item.location_1_zip} the amount of water they used in ${searchYear} were ${Math.floor(item.fy_06_07*7.48)} gallons.</p>
                </div>
                <div class="card-action">
                
                </div>
              </div>
            </div>
        `
        finalHTML += cardItem
        })    
        var resultDiv= document.getElementById('result')
        resultDiv.innerHTML = finalHTML
     })
     .catch(function(error){
         console.log(error)
     })
}
