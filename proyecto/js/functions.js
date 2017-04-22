$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	$("#space").attr("style", "height:"+$(window).height()/12+"px");
	$("a.newacc").click(function(){
		var actual = $("button").text();
		if(actual=="Sign in"){
			$("button").text("Sign up");
			$("a.newacc").html("Already have an account? Sign in");
			$("#email").slideToggle();
			$("#fullName").slideToggle();
		}
		else{
			$("button").text("Sign in");
			$("a.newacc").html("Don't have an account? Sign up");
			$("#email").slideToggle();
			$("#fullName").slideToggle();
		}
		
	});
	$(".user_m.participacion").on("mouseenter",function(){
		var eldiv= $(this).find("div");
		var elhidden = $(this).find("p");
		var auxiliar = eldiv.html();
		eldiv.html(elhidden.html());
		elhidden.html(auxiliar);
	});
	$(".user_m.participacion").on("mouseleave",function(){
		var eldiv= $(this).find("div");
		var elhidden = $(this).find("p");
		var auxiliar = eldiv.html();
		eldiv.html(elhidden.html());
		elhidden.html(auxiliar);
	});
});

function test(){
	$("body").scrollTop($("#test").position().top);
	alert($("#test").position().top);
}