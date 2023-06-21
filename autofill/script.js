const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let lowerCaseString = str.toLowerCase();
	fruits.forEach((fruit) => {
		let lowerCaseValue = fruit.toLowerCase();
		if (lowerCaseValue.includes(lowerCaseString)) results.push(fruit);
	});
	return results;
}

function searchHandler(e) {
	if(input.value != ''){
		let results = search(input.value);
		showSuggestions(results, input.value);
	}else{
		suggestions.innerHTML = "";
		suggestions.classList.remove("has-suggestions");
	}
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	let lowerInputVal = inputVal.toLowerCase();
	results.forEach((fruit) => {
		let lowerFruit = fruit.toLowerCase();
		let newSuggestion = document.createElement('li');
		let splitPoint = lowerFruit.indexOf(lowerInputVal); //results is sure to contain matches
		let boldHighlight = fruit.slice(0, splitPoint) + "<strong>" + fruit.slice(splitPoint, splitPoint + inputVal.length) + "</strong>" + fruit.slice(splitPoint + inputVal.length);

		newSuggestion.innerHTML = boldHighlight;
		suggestions.appendChild(newSuggestion);
	});
	if (suggestions.innerHTML != ""){
		suggestions.classList.add("has-suggestions");
	}
}

function useSuggestion(e) {
	input.value = boldMap.get(e.target.innerText);
	suggestions.innerHTML = "";
	suggestions.classList.remove("has-suggestions");
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);