
*********************************Please Follow The Following Steps To Run The Application Without Error*********************************
****************************************************************************************************************************************

Step 1: Steps to Set-Up MongoDB to Populate Application With Sample Data

Step 1.1: Open terminal on your Local Machine
Step 1.2: Run command "mongod" on your terminal
Step 1.3: Open new terminal
Step 1.4: Run command "mongo" 
Step 1.5: Run command "use finalprojectdb"

Step 1.6: Now, as you are inside the DB finalprojectdb, please insert the following sample value to the collection called 
		  "Product" by running following code:

		db.Product.insert([
		  {
			"_id": 1,
			"name": "Samosa",
			"description": "A fried or baked pastry with a savoury filling, such as spiced potatoes, onions, peas, cheese, beef and other meats, or lentils. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.",
			"imageUrl": "https://image.freepik.com/free-photo/samosa_57665-4241.jpg",
			"price": 5.99
		  },
		  {
			"_id": 2,
			"name": "Fried Potato",
			"description": "In a large skillet over medium-high heat, heat oils. Add potatoes and season with rosemary, salt and pepper. Cook, undisturbed, until potatoes are golden and crusty underneath, 4 to 5 minutes. Flip potatoes and cook until golden on other sides, 4 to 5 minutes more.",
			"imageUrl": "https://thumbs.dreamstime.com/z/fried-potatoes-wedges-pan-wooden-table-136257123.jpg",
			"price": 9.99
		  },
		  {
			"_id": 3,
			"name": "Quesadilla",
			"description": "Mexican dish and type of sandwich, consisting of a tortilla that is filled primarily with cheese, and sometimes meats and spices, and then cooked on a griddle. Traditionally, a corn tortilla is used, but it can also be made with a flour tortilla, particularly in northern Mexico and the United States",
			"imageUrl": "https://st2.depositphotos.com/1373322/6195/i/600/depositphotos_61957083-stock-photo-quesadilla-with-vegetables-and-sauces.jpg",
			"price": 12.99
		  },
		  {
			"_id": 4,
			"name": "Pasta",
			"description": "Food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
			"imageUrl": "https://image.freepik.com/free-photo/penne-pasta_1339-934.jpg",
			"price": 13.99
		  },
		  {
			"_id": 5,
			"name": "Combo Plate",
			"description": "Spoon chicken and mushrooms to one side of skillet and add rice to the other side. Let toast 1 minute, then stir until combined. Pour over chicken broth and heavy cream and bring to a simmer. Let simmer until rice is tender, about 20 minutes, until rice is tender and creamy.",
			"imageUrl": "https://tucsonfoodie.com/wp-content/uploads/2019/06/TF-Fried-Rice-Hut-chicken-wing-combo-2653.jpg",
			"price": 15
		  },
		  {
		  "_id": 6,
			"name": "Paani Puri",
			"description": "Panipuri or Fuchka or Gupchup or Golgappa is a type of snack that originated in the Indian subcontinent, and is one of the most common street foods in Pakistan, India and Bangladesh.",
			"imageUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Pani-Puri_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546894450909.jpeg",
			"price": 9.99
		  },
		  {
		  "_id": 7,
			"name": "Dumplings(MOMO)",
			"description": "Dumplings are delightful things, born of thrift and culinary ingenuity, that can easily be eaten in a few bites. That's about as definitive a definition as I can reasonably give. Try to craft any stricter definition — one that perfectly encapsulates the incredible diversity of the foods that fall under that category — and you will fail.",
			"imageUrl": "https://www.thespruceeats.com/thmb/uof94YPDmDqP0kAlbi_t04VR47E=/4000x3000/smart/filters:no_upscale()/chinese-pan-fried-dumplings-694499_hero-01-f8489a47cef14c06909edff8c6fa3fa9.jpg",
			"price": 7.99
		  },
		  {
		  "_id": 8,
			"name": "Burger",
			"description": "A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. ... There are many international and regional variations of the hamburger.",
			"imageUrl": "https://www.burger21.com/wp-content/uploads/2020/02/Tex-Mex.jpg",
			"price": 10.99
		  },
		  {
		  "_id": 9,
			"name": "Fried Fish",
			"description": "Fried fish refers to any fish or shellfish that has been prepared by frying. Often, the fish is covered in batter, egg and breadcrumbs, flour, or herbs and spices before being fried and served, often with a slice of lemon. Fish is fried in many parts of the world, and fried fish is an important food in many cuisines.",
			"imageUrl": "https://www.ndtv.com/cooks/images/KERELA.FISH.66%281%29.jpg",
			"price": 12.99
		  },
		  {
		  "_id": 10,
			"name": "Grilled Shrimp Tacos",
			"description": "Mix the shrimp with olive oil and seasonings (cumin, garlic powder, and chili powder). Toss them on the grill and grill 1 to 2 minutes per side, until bright pink and cooked through. Serve in a tortilla with the coleslaw, spicy mayo, cilantro, and lime juice.",
			"imageUrl": "https://minimalistbaker.com/wp-content/uploads/2017/12/30-Minute-Roasted-Vegetable-Tacos-with-Chimichurri-BIG-flavor-satisfying-HEALTHY-vegan-glutenfree-plantbased-tacos-chimichurri-cauliflower-minimalistbaker-recipe-3.jpg",
			"price": 12.99
		  }
		])

Caution: Keep the mongo running...
		
*********************************Now, Database is Fully Set-Up to be Connected to the Application Backend*********************************
***************************************************************************************************************************************



Step 2: Steps to connect mongoDB to the application backend.

Step 2.1: Open a New Terminal 
Step 2.2: Use command "cd" and Go inside "TcsCart/backend"
Step 2.3: Run command "npm install" ----> (inside TcsCart/backend) 
Step 2.4: Run command "node app.js" ----> (inside TcsCart/backend)

Caution: Keep the backend running...

*********************************Now, Database is connected to the Application Backend*************************************************
***************************************************************************************************************************************


Step 3: Steps to run the Steps to connect fromtend to backend and run application in the browser.

Step 3.1: Open a New Terminal 
Step 3.2: Use command "cd" and Go inside "TcsCart/plate-from-scratch"
Step 3.3: Run command "npm install" ----> (inside TcsCart/plate-from-scratch) 
Step 3.4: Run command "ng serve -o" ----> (inside TcsCart/plate-from-scratch)
