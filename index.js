function addToInput(val) {
    console.log("Key is Clicked")
    document.getElementById('result').value += val;
}

function clearInput() {
    console.log("Key is Clicked for clearing input")
    document.getElementById('result').value = '';
}

function deleteInput() {
    console.log("Key is Clicked for input delete")
    let str = document.getElementById('result').value;
    let newStr = str.slice(0, -1)
    document.getElementById('result').value = newStr;
}

function calculate() {
    try {
        var input = eval(document.getElementById('result').value);
        document.getElementById('result').value = input;
    } catch (err) {
        document.getElementById('result').value = 'Error';
    }
}