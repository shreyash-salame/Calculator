
    const screen = document.getElementById('calculator-screen');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                screen.value = '';
            } else if (buttonText === 'DEL') {
                screen.value = screen.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    screen.value = eval(screen.value);
                } catch {
                    screen.value = 'Error';
                }
            } else if (buttonText === '%') {
                screen.value = (parseFloat(screen.value) / 100).toString();
            } else {
                screen.value += buttonText;
            }
        });
    });
