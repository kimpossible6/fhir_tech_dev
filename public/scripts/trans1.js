

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
    document.getElementById("next").onclick = function() {
        location.href = 'confirm_phone.html';
        input1 = document.getElementById("tel1").value;
        input2 = document.getElementById("tel2").value;
        input3 = document.getElementById("tel3").value;
    }
    return [input1,input2,input3];
}



// var myBtn = document.getElementById('next');
// myBtn.addEventListener('click', function(event) {
//     window.location.href='confirm_phone.html';
//   });


// function getphone() {
// 	var code = new myfunction();
// 	return 
// }

function getdate() {
    var dob = document.getElementById("myDate").value;
}



