/************ Show Input form *********/

function showSection(sectionId) {
	sectionId.style.display = 'block';
}

//* ColorBox *//
var color = document.getElementById('colorSection');
var mark = document.getElementById('markSection');
var text = document.getElementById('textSection');
var showColor = document.getElementById('show-color');
var colorInput = document.getElementById('colorInput');


function colorSave() {

	var colorValue = colorInput.value;

	const str = colorValue;

	const words = str.split(' ');
	console.log(words);


	if(colorInput.value === '') {
		showColor.innerHTML = '';
		alert('Please type hex color code.');

	} else {

		for (let i = 0; i < words.length; i++) {

			var colorBox = document.createElement('div');
			colorBox.classList.add('color-box');
			// colorBox.style.backgroundColor = colorValue;
			colorBox.style.backgroundColor = words[i];

			var colorCode = document.createElement('p');
			colorCode.classList.add('color-code');
			// colorCode.innerText = colorValue;
			colorCode.innerText = words[i];
			
			showColor.appendChild(colorBox);
			colorBox.appendChild(colorCode);
		}

	}

	console.log(colorBox);

	var allColorBox = querySelectorAll('.color-box');

	allColorBox.addEventListener('click', function() {

		allColorBox.style.display = 'none';
		console.log('click');


	});
	
	// colorBox.addEventListener('click', function() {

	// var copyColor = document.getElementById('colorInput');

	// 	copyColor.select();

	// 	document.execCommand('copy');
	// 	console.log(copyColor.value);

	// });

}

function clearColor() {
	colorInput.value = '';
	// showColor.innerHTML = '';
}

//* Mark down *//

var markInput = document.getElementById('markInput');

var showMark = document.getElementById('show-mark');

function markSave() {	

	var markValue = markInput.value;
	showMark.innerHTML = marked(markValue);

	console.log(showMark.innerHTML);
}

function clearMark() {
	markInput.value= '';
	showMark.innerHTML = '';
}


//* Paragraph Style *//
var textOriginal = document.getElementById('textInput');
var textFontStyle = document.getElementById('fontStyle');
var textFontSize = document.getElementById('fontSize');
var textFontWeight = document.getElementById('fontWeight');
var textLineHeight = document.getElementById('lineHeight');
var textLetterSpacing = document.getElementById('letterSpacing');
var textFontColor = document.getElementById('fontColor');


function textSave() {

	textOriginal.style.fontFamily = textFontStyle.value;
	textOriginal.style.fontSize = textFontSize.value;
	textOriginal.style.fontWeight = textFontWeight.value;
	textOriginal.style.lineHeight = textLineHeight.value;
	textOriginal.style.letterSpacing = textLetterSpacing.value;
	textOriginal.style.color = textFontColor.value;

}

function italic() {

	var textOriginal = document.getElementById('textInput');

	if(textOriginal.classList.contains('italic-active')) {
		textOriginal.classList.remove('italic-active');
	} else {
		textOriginal.classList.add('italic-active');
	};
}