function checkDriverAge(){
    var age = Number(prompt("What is your age?"));
    if (age < 18 ) alert("Sorry, you are too young to drive this car. Powering off!!");
    if (age ===18) alert("Congratulations for your first drive!!!");
    if (age > 18) alert("Powering on..Enjoy your ride");

}
function checkDriverAge2(age){
    age = Number(age);
    if (age < 18 ) return "Sorry, you are too young to drive this car. Powering off!!";
    if (age ===18) return "Congratulations for your first drive!!!";
    if (age > 18) return "Powering on..Enjoy your ride";

}
{
	username: "andrei",
	password: "supersecret"
}

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];