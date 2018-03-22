

// const request = new XMLHttpRequest();
//   request.open('GET', 'http://www.omdbapi.com/?apikey=c40cb228');
//   // 3 callback on load event
//   request.onload = () => {
//     const responseData = JSON.parse(request.responseText);
    
//   };
 
//   request.send();

// var movieInfo = 1;
// function movieDatabase(data) {
	
// 	$.ajax({
//   url: "http://www.omdbapi.com/?apikey=c40cb228&",
//   type: 'GET',
//   success: function(data) {
//     getInfo(data.movieInfo);
//   }
// });

// request.send();
// }

// movieDatabase();
// $(".myForm").click(function(e) {
// 	e.preventDefault();
// 	movieDatabase(movieInfo)
// });

// $(document).ready(function(){
// 	$.ajax({url: "http://www.omdbapi.com/?apikey=c40cb228&", 
//     type: 'GET',
// 	success: function(result){
//     // Return the value of 'actor' in the 'playedBy' object.
//   	let movieName = result.getMovie;
//   // created p element with the id of "my-actor" and adding text with the actor name by using the attribute and html methods
//   let movieYear = $('<label></label>').attr("id","year").html(year);
//   // Append the name of the actor to the dom 
// $("body").append(movieYear);
//             console.log(result);
//         },
//         error: function(error){
//           console.log(error);
//         }
// });
// });

window.onload = function (evt) {
  console.log('js loaded');

  const request = new XMLHttpRequest();
  request.open('GET', 'http://www.omdbapi.com/?apikey=c40cb228');
  // 3 callback on load event
  request.onload = () => {
    const responseData = JSON.parse(request.responseText);
    render(responseData);
  };
  // 4  send
  request.send();

  function render(data) {
    console.log('data: ', data);
  }
}



