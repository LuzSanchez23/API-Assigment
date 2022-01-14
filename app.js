//Change the body tag's style so it has a font-family of "Arial, sans-serif"
document.body.style.fontFamily = 'Arial, sans-serif';

//Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('nickname').textContent = 'Princess Bubblegum';
document.getElementById('favorites').textContent = 'Princess Bubblegum';
document.getElementById('hometown').textContent = 'Princess Bubblegum';

//Iterate through each li and change the class to "list-item".
var items = document.getElementsByTagName('li');
for (var i=0; i < items.length; i++) {
    items[i].className = 'list-item';
}
//(In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.

//Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var myPic = document.createElement('img');
myPic.src = 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
document.body.appendChild(myPic);
