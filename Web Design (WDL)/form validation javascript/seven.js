var n, a, pw, e;
var echk= /[a-z0-9]+@[a-z0-9]+[.][a-z0-9]{2}/gi;
var nchk = /[a-z]\s*/gi;
var nnchk = /([0-9]|[!@#$%^&*()])/gi;
function fcheck() {
	var n = document.forms["vdn"]["fname"].value;
	var a = document.forms["vdn"]["age"].value;
	var pw = document.forms["vdn"]["pass"].value;
	var e = document.forms["vdn"]["mail"].value;
	
	if (n.length > 5 && nchk.test(n)) {
		var nc = true;
	}
	else if (n.length <= 5 || nnchk.test(n)) {} {
		var nc = false;
		alert("Name is invalid");
	}
	if (a > 5 && a < 112) {
		var ac = true;
	}
	else {
		var ac = false;
		alert("Age is invalid");
	}
	if (pw.length > 5) {
		var pwc = true;
	}
	else {
		var pwc = false;
		alert("Password is invalid");
	}
	if (echk.test(e)) {
		var ec = true;
	}
	else {
		var ec = false;
		alert("email is invalid");
	}
	if (nc==true && ac==true &&  pwc==true && ec==true) {
		document.getElementById("outp").innerHTML = "inputs are valid";
	} else {
		document.getElementById("outp").innerHTML = "inputs are invalid";
	}
	
}