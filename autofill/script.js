const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

let boldMap = new Map();

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
	results.forEach((fruit) => {
		let newSuggestion = document.createElement('li');
		let splitPoint = fruit.indexOf(inputVal); //results is sure to contain matches
		let boldHighlight = ''; //need to initialize the bolded value here to avoid having "let" twice

		//if the index of 
		if(splitPoint != -1){
			boldHighlight = fruit.slice(0, splitPoint) + "<strong>" + inputVal + "</strong>" + fruit.slice(splitPoint + inputVal.length);
		}else{
			boldHighlight = "<strong>" + fruit.slice(0, inputVal.length) + "</strong>" + fruit.slice(inputVal.length);
		}
		boldMap.set(boldHighlight, fruit);
		newSuggestion.innerHTML = boldHighlight;
		suggestions.appendChild(newSuggestion);
	});
	if (suggestions.innerHTML != ""){
		suggestions.classList.add("has-suggestions");
	}
}

function useSuggestion(e) {
	input.value = boldMap.get(e.target.innerHTML);
	suggestions.innerHTML = "";
	suggestions.classList.remove("has-suggestions");
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);