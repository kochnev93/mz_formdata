export function validateForm(form){
    // Объект в который упаковываем данные
    let formData = {
        name: null,
        education: []
    };
    const result = document.getElementById('root');

    // Удаляем сообщения об ошибках
    const errorMessage = document.querySelectorAll('.error-message');
    errorMessage.forEach( item => {
        item.parentNode.removeChild(item);
    });

    // Удаляем классы с ошибками у элементов
    const errorClass = document.querySelectorAll('.form-item');
    errorClass.forEach( item => {
        item.classList.remove('error');
    });
    
    // Проверяем ФИО
    const userName = form.user_name;
    if( checkName(userName.value) ){
        formData.name = userName.value;
    } else {
        let message = "Недопустимое имя. Убедитесь, что имя заполнено согласно образцу";
        createErrorMessage(userName, message);
    }

    //Проверяем Образование
    const educationItem = document.querySelectorAll('.user-education__item');
    educationItem.forEach( item => {
        //Данные об образовании
        let yearEnd = item.querySelector('[name=user_education_yearEnd]').value;
        let university = item.querySelector('[name=user_education_university]').value.trim();
        let speciality = item.querySelector('[name=user_education_speciality]').value;
        let degree = item.querySelector('[name=user_education_degree]').value;
        let str; // записываем конечный вариант записи

        univerDeclination(university);



        switch(degree){
            case 'Диплом':
                str = `${yearEnd} г. &mdash; ${university}, специальность «${speciality}».`;
                formData.education.push(str);
                break;
            default:
                str = `${yearEnd} г. &mdash; ${degree} на базе ${univerDeclination(university)}, специальность «${speciality}».`;
                formData.education.push(str);
                break;
        }

    });

    function createErrorMessage(element, message){
        element.parentNode.classList.add('error');
        let error = document.createElement('p');
        error.classList.add('error-message');
        error.innerHTML = message;
        element.parentNode.appendChild(error);
    };

    function checkName (name){
        var regExp = /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/
        return regExp.test(name)
    };

    function checkUniversity (name){
        var regExp = /^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/
        return regExp.test(name)
    };

    function univerDeclination (str){
        // Проверяем на наличие слов "Университет / Академия" в ответе
        if( str.toLowerCase().indexOf('университет') !== -1
            || str.toLowerCase().indexOf('колледж') !== -1
            || str.toLowerCase().indexOf('институт') !== -1  ){
            return str
                .replaceAll('ий', 'ого')
                .replaceAll('ой', 'ого')
                .replaceAll('ый', 'ого')
                .replaceAll('университет', 'университета')
                .replaceAll('Университет', 'Университета')
                .replaceAll('колледж', 'колледжа')
                .replaceAll('Колледж', 'Колледжа')
                .replaceAll('институт', 'института')
                .replaceAll('Институт', 'Института');
        } else if (str.toLowerCase().indexOf('академия') !== -1){
            return str
                .replaceAll('ая', 'ой')
                .replaceAll('академия', 'академии')
                .replaceAll('Академия', 'Академии');
        } else{
            return str;
        }
    }

    //test
    result.innerHTML = JSON.stringify(formData);

}