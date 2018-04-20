var evia_attendees = [
  "Igor Ilic",
];
document.getElementById('app').appendChild(ul);
evia_attendees.forEach(function(attendee) {
  var li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML += attendee;
});
