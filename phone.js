$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_list").hide(); // hide the element with ID "otherElement"
  $("#Add_Contact").hide(); // hide the element with ID "otherElement"

});
$("#ContackListButton").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#Add_Contact").hide();	// hide other element
  $("#content_dialer").hide();	// hide other element
});
$("#AddContactButton").click(function() { // when "button_id" is clicked
	$("#Add_Contact").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_list").hide();	// hide other element
});
$("#DialerButton").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#Add_Contact").hide();	// hide other element
  $("#content_list").hide();	// hide other element
});
