//used defer as it is a good default setting as it allows DOM to be executed after HTML has been parsed

document.getElementById('btn-alert').addEventListener('click', function() {
    alert("Hey there, I hope you're having a great day!");
});

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Click for the Message!';
};

document.getElementById('btn-alert').onmouseout = () => {
    document.getElementById('btn-alert').textContent = 'Time to Check In!';
};

document.addEventListener('DOMContentLoaded', function() {

    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
    let counterValue = 0;

    counterElement.textContent = counterValue;

    incrementButton.addEventListener('click', function() {
        counterValue++;
        counterElement.textContent = counterValue;

        if (counterValue % 2 === 0) {

            counterElement.style.color = '#2B398F';
        } else {

            counterElement.style.color = '#FFC107';
        }
    });
    
});

var numbersList = document.getElementById('numbers');

for (var i = 0; i < 100; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    numbersList.appendChild(listItem);
}

document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function updateFooter() {
    var footer = document.getElementById('footer');
    var yearElement = document.getElementById('year');
    var monthElement = document.getElementById('month');

    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.toLocaleString('en-US', { month: 'short' });

    yearElement.textContent = year;
    monthElement.textContent = month;
}

updateFooter();

