let myText = document.getElementById('my-text');
myText.addEventListener('input', () =>{
    let count = (myText.value).length;
    console.log(count);
    document.getElementById('count-result').
    textContent = `Total characters; ${count}`;
})