export function validateForm(form){
    // Объект в который упаковываем данные
    let formData = {
        name: null,
        education: [],
        certificate: []
    };
    const result = document.getElementById('root');
    // Счетчик ошибок
    let errorCount = makeCounter();


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
        errorCount();
        let message = "Недопустимое имя. Убедитесь, что имя заполнено согласно образцу";
        createErrorMessage(userName.parentNode.parentNode, message);
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


    // Проверяем сертификаты
    const certificateItem = document.querySelectorAll('.user-certificate__item');
    certificateItem.forEach( item => {
        let certificateName = item.querySelector('[name=user-certificate-speciality]').value;
        let certificateBegin = item.querySelector('[name=user_certificate_yearBegin]').value;
        let certificateEnd = item.querySelector('[name=user_certificate_yearEnd]').value;

        let now = new Date();
        let start = new Date(certificateBegin);
        let end = new Date(certificateEnd);
        let str;

        if(end.getFullYear() - start.getFullYear() === 5
            && end.getDate() === start.getDate() 
            && end.getMonth() === start.getMonth()){
                str = `Сертификат по специальности «${certificateName}». Выдан ${start.getDate()}.${start.getMonth() + 1}.${start.getFullYear()} г. Действителен до ${end.getDate()}.${end.getMonth() + 1}.${end.getFullYear()} г.`;
                formData.certificate.push(str);
        } else {
            errorCount();
            let message = "Ошибка. Срок действия сертификата 5 лет";
            createErrorMessage(item, message);
        }

    });

    function createErrorMessage(element, message){
        element.classList.add('error');
        let error = document.createElement('p');
        error.classList.add('error-message');
        error.innerHTML = message;
        element.appendChild(error);
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
            || str.toLowerCase().indexOf('институт') !== -1 ){
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

    function makeCounter(){
        let count = 0;
        return function() {
            return ++count;
        }
    }

    //test
    if(errorCount() === 1){
        /*Send form*/
        document.querySelector('.result-test').innerHTML = 'Ошибок нет';
        result.innerHTML = JSON.stringify(formData);
    } else{
        document.querySelector('.result-test').innerHTML = 'Исправьте ошибки';
    }
    

}