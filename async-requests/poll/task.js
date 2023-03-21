const xhr = new XMLHttpRequest();

function getPoll() {
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const polls = JSON.parse(e.currentTarget.responseText).data;            
            const answers = polls['answers'];
            console.log(answers);

            const divItemCode = document.querySelector('.poll__title');   
            const question = polls['title'];
            divItemCode.textContent = `${question}`;

            answers.forEach(answer => {
                const pollAnswers = document.getElementById('poll__answers');                
                let btn = document.createElement('button');
                btn.classList.add('poll__answer');
                btn.textContent = `${answer}`;                
                pollAnswers.appendChild(btn);                
            });

            let buttons = Array.from(document.querySelectorAll('.poll__answer'));
            console.log(buttons)
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    alert('Спасибо, Ваш ответ засчитан');
                });
            });

        };
    });    
};

xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
getPoll();
