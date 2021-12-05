


var classes = document.getElementsByClassName("usercard");
var arr = [...classes];

var muteChat = () => {
	let checkedBoxes = document.querySelectorAll("input:checked");
	let mutedList = [];
	checkedBoxes.forEach(element => mutedList.push(element.value));

	let userComments = [...document.getElementsByTagName('dt')];
	
	userComments.forEach(comment => {
		if ([...mutedList].includes(comment.children[1].innerText)) {
			comment.nextSibling.style.display = "none";
			comment.style.display = "none";
		} else {
			comment.nextSibling.style.display = "block";
			comment.style.display = "block";
		}
	});
}


arr.forEach((element) => {
	let userName = element.children[1].innerText;
	var input = document.createElement("input");
	let mutePlayer = function() {
		if (input.checked == true) {
			window.localStorage.setItem(userName, true);
		} else {
			window.localStorage.setItem(userName, false);
		}
		muteChat();
	}
	input.type = "checkbox";
	input.value = userName;
	input.class = "muteButton";
	input.checked = JSON.parse(window.localStorage.getItem(userName));
	input.onclick = mutePlayer;
	
	element.appendChild(input);
});

muteChat();

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    muteChat();
  });
});