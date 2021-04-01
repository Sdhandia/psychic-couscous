var arrayimages=["https://webstockreview.net/images/dad-clipart-animated-15.png","https://clipartart.com/images/mom-standing-clipart-1.jpg","https://www.netclipart.com/pp/m/18-183564_lukes-little-sister-brother-face-clipart.png"];
var arraynames=["Abhinav Dhandia","Sugandha Dhandia","Apnavi Dhandia"];
var i=0;
function next(){

i++;
 var numbers_of_family_member_in_array = 3 ;
 if(i > numbers_of_family_member_in_array ) { i = 0; } var updatedImage = arrayimages[i];
  var updatedName = arraynames[i];
   document.getElementById("image").src = updatedImage;
   document.getElementById("name").innerHTML = updatedName;
}