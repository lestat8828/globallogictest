$(document).ready(function(){
	skills()

})

var skills_arr = [  { name: "HTML5", level: 8},  { name: "CSS3", level: 5},  { name: "JavaScript", level: 10},  { name: "ReactJS", level: 8 },  { name: "AngularJS", level: 8 } ]

function skills (){
	var out = ""
	var level = ""
	for (var i = 0; i < skills_arr.length; i++) {
		out +="<p>"+skills_arr[i].name+"</p>"
		level += '<div class="progress"><div class="progress-bar" style="width: '+skills_arr[i].level*10+'%" role="progressbar" aria-valuenow="'+skills_arr[i].level+'" aria-valuemin="0" aria-valuemax="10"></div></div><br>'
	}
	$(".skill_name").html(out)
	$(".skill_level").html(level)
}



var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
   console.log(document.getElementById("Name").value)
   console.log(document.getElementById("Email").value)
   console.log(document.getElementById("Send").value)
   event.preventDefault()
})