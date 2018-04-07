

// auto input flow to next
$(".inputs").keyup(function () {
   if (this.value.length == this.maxLength) {
     $(this).nextAll('.inputs:enabled:first').focus();
   }
});

$(function(){
    var $select = $(".1-12");
    var $select2 = $(".1-31");
    var $select3 = $(".1900-2018");
    for (i=1;i<=12;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
    for (i=1;i<=31;i++){
        $select2.append($('<option></option>').val(i).html(i))
    }
    for (i=1900;i<=2018;i++){
        $select3.append($('<option></option>').val(i).html(i))
    }
});


var input1=123;
var input2=123;
var input3=1234;
function myfunction() {
	input1 = document.getElementById("tel1").innerHTML;
    input2 = document.getElementById("tel2").innerHTML;
    input3 = document.getElementById("tel3").innerHTML;
    window.location.href = 'confirm_phone.html';
    return [input1,input2,input3];
}

// function getphone() {
// 	var code = new myfunction();
// 	return 
// }

function getdate() {
    var dob = document.getElementById("myDate").value;
}