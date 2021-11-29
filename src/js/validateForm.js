export function validateForm(form){
    // Объект в который упаковываем данные
    let formData = {};
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

    //test
    result.innerHTML = JSON.stringify(formData);

}