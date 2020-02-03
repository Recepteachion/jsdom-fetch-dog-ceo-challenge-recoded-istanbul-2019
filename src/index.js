console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgCon = document.getElementById("dog-image-container");
let newIm = document.createElement("img");

imgCon.appendChild(newIm);
document.querySelector("img").id ="image";


fetch(imgUrl).then(function(response){
	return response.json()
	.then(function(json){
		document.getElementById("image").src=json.message[0];
		

	})
})