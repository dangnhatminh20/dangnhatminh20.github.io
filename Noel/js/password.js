$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="ngao" &&  pwd=="111000"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="noel.html";},2000);
	}
	else{
		alert("Nhập sai rồi nhé...))");
	}
});
