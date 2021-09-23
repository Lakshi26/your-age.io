function ageInDays(){
    event.preventDefault()
    var birthDate = document.getElementById("fname").value;
    var result = (2018-birthDate) * 365;
    var h1 = document.createElement('h1'); 
    var textAnswer = document.createTextNode(result);

    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);

    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
