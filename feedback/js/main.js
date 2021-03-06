function validateForm () {
    let name = document.getElementById('name');
    let name_regexp = /[a-zа-яА-ЯA-Z]/i;
    let email = document.getElementById('email');
    let email_regexp = /[a-z]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    let phone = document.getElementById('phone');
    let phone_regexp = /\+7\(\d+\)\d+\-\d+/i;

    if ((!phone_regexp.test(phone.value)) || (!email_regexp.test(email.value)) || (!name_regexp.test(name.value))){
            if (!name_regexp.test(name.value)) {
                let output = 'Имя только из букв';
                document.getElementById('nameHelp').innerHTML = output;
                name.classList.add("error-validate");
            }
            else {
                name.classList.add("validate-good");
            }
            if (!phone_regexp.test(phone.value)) {
                let output = 'Проверьте номер, он должен быть формата +7(000)000-0000';
                document.getElementById('phoneHelp').innerHTML = output;
                // alert('Проверьте номер, он должен быть формата +7(000)000-0000');
                phone.classList.add("error-validate");
            }
            else {
                phone.classList.add("validate-good");
            }
            if (!email_regexp.test(email.value)) {
                // alert('Проверьте email');
                let output = 'Адрес электронной почты введен неправильно!';
                document.getElementById('emailHelp').innerHTML = output;
                email.classList.add("error-validate");

            }
            else {
                email.classList.add("validate-good");
            }
            return false
    }

}