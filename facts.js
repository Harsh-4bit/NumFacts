document.addEventListener('DOMContentLoaded', function () {
    let fact = document.querySelector('#fact');
    let factText = document.querySelector('#factText');

    let numberInput = document.querySelector('#numberInput');
    numberInput.addEventListener('input', getFactFetch);

    function getFactFetch() {
        let number = numberInput.value;

        if (number !== '') {
            fetch('http://numbersapi.com/' + number)
            .then(response => response.text())
            .then(data => {
                fact.style.display = 'block';
                factText.innerHTML = data;
            })
            .catch(err => console.log(err));
        } else {
            fact.style.display = 'none';
        }
    }
});
