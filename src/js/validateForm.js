export function validateForm(form){
    let formData = new FormData();
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
        formData.append('name', userName.value);
    } else {
        errorCount();
        let message = "Недопустимое имя. Убедитесь, что имя заполнено согласно образцу";
        createErrorMessage(userName.parentNode.parentNode, message);
    }

    //Проверяем Образование
    const educationItem = document.querySelectorAll('.user-education__item');
    let education = [];
    educationItem.forEach( item => {
        //Данные об образовании
        let yearEnd = item.querySelector('[name=user_education_yearEnd]').value;
        let university = item.querySelector('[name=user_education_university]').value.trim();
        let speciality = item.querySelector('[name=user_education_speciality]').value;
        let degree = item.querySelector('[name=user_education_degree]').value;
        let str; // записываем конечный вариант записи

        switch(degree){
            case 'Диплом':
                str = `${yearEnd} г. &mdash; ${university}, специальность «${speciality}».`;
                education.push(str);
                break;
            default:
                str = `${yearEnd} г. &mdash; ${degree} на базе ${univerDeclination(university)}, специальность «${speciality}».`;
                education.push(str);
                break;
        }

    });

    // Записываем данные об образовании
    formData.append('education', education);



    // Проверяем сертификаты
    const certificateItem = document.querySelectorAll('.user-certificate__item');
    let certificate = [];
    certificateItem.forEach( item => {
        let certificateName = item.querySelector('[name=user-certificate-speciality]').value;
        let certificateBegin = item.querySelector('[name=user_certificate_yearBegin]').value;
        let certificateEnd = item.querySelector('[name=user_certificate_yearEnd]').value;

        let start = new Date(certificateBegin);
        let end = new Date(certificateEnd);
        let str;

        if(end.getFullYear() - start.getFullYear() === 5
            && end.getDate() === start.getDate() 
            && end.getMonth() === start.getMonth()){
                str = `Сертификат по специальности «${certificateName}». Выдан ${start.getDate()}.${start.getMonth() + 1}.${start.getFullYear()} г. Действителен до ${end.getDate()}.${end.getMonth() + 1}.${end.getFullYear()} г.`;
                certificate.push(str);
        } else {
            errorCount();
            let message = "Ошибка. Срок действия сертификата 5 лет";
            createErrorMessage(item, message);
        }

    });

    // Записываем данные о сертификатах
    formData.append('certificate', certificate);


    // Проверяем доп. образование
    const additionalItem = document.querySelectorAll('.user-additional__item');
    let additional = [];

    additionalItem.forEach( item => {
        let additionalTitle = item.querySelector('[name=user_additional_title]').value;
        let additionalAuthor = item.querySelector('[name=user_additional_author]').value;

        if(additionalTitle.length !== 0){
            if(additionalAuthor.length !== 0){
                additional.push(`&mdash; «${additionalTitle.trim()}», ${additionalAuthor.trim()}.`);
            } else{
                additional.push(`&mdash; «${additionalTitle.trim()}».`);
            }
        }
    });
     // Записываем данные о доп. образовании
     formData.append('additional', additional);


    // Проверяем ключевые навыки
    const skills = document.querySelector('[name=user_skill]').value;
    // Записываем данные о ключевых навыках
    formData.append('skill', skills.trim());


    // Проверяем фото
    const photo = form.user_photo;
    if( checkPhoto(photo) ){
        formData.append('photo', photo.files[0])
    }
    

    // Функции
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

    function checkPhoto(photo){
        const file = photo.files[0];
    
        const validExtension = ['jpg', 'jpeg', 'png'];
        const fileSize = file.size/1024/1024; //Mb
        const fileExt = file.name.split('.').pop().toLowerCase();
    
        if(fileSize > 5){
            errorCount();
            let message = "Размер файла не должен превышать 5 Мб";
            createErrorMessage(photo.parentNode, message);
            return false;
        };
    
        if( !validExtension.includes(fileExt) ){
            errorCount();
            let message = "Неверное расширение файла. Загрузите фото с расширением jpg, jpeg, png";
            createErrorMessage(photo.parentNode, message);
            return false;
        }

        // Выводим превью фото
        let reader = new FileReader();
        reader.onload = function(e){
            document.querySelector('.photo_preview').innerHTML = `<img src="${e.target.result}">`;
        };
        reader.readAsDataURL(file);

        return true;
    }

    console.log(formData);

    //test
    if(errorCount() === 1){
        /*Send form*/

        // test
        document.querySelector('.result-test').innerHTML = 'Ошибок нет';
        result.innerHTML = `
        ${formData.get('name')}
        ${formData.get('education')}
        ${formData.get('certificate')}
        ${formData.get('additional')}
        ${formData.get('skill')}
        ${formData.get('photo')}`;
    } else{
        document.querySelector('.result-test').innerHTML = 'Исправьте ошибки';
    }
    
}