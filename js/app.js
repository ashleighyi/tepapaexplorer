	//firebase reference
	var data = new Firebase('https://tepapaexplorer.firebaseio.com/');


	//on change get data 
	data.on("value", function(snapshot) {
		context = snapshot.val();

		var source = $("#home-template").html ();
		var template = Handlebars.compile(source);
		var html = template(context);

		console.log(html);
		$('#yield').html(html);
	});

	//Event Method
	$("#submit").click(function(){
		
		var book = {
			exhibition: null,
			about: null,
			where: null,
			cost: null
		};

		book.exhibition = $("#exhibition").val();
		book.about = $("#about").val();
		book.where = $("#where").val();
		book.cost = $("#cost").val();

		data.child("books").push(book);
	});
