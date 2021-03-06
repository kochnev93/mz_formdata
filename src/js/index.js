import "../style/style.scss";
import {validateForm} from "./validateForm.js";

"use strict"

document.addEventListener("DOMContentLoaded", function() {
    const nowDate = new Date();

    // Контейнеры данных
    const userEducationBox = document.querySelector('.user-education__list');
    const userCertificateBox = document.querySelector('.user-certificate__list');
    const userAdditionalBox = document.querySelector('.user-additional__list');
    const userSkillBox = document.querySelector('.user-skill__list');

    // Добавление пункта об образовании
    const addEducationItemBtn = document.querySelector('.user-education__btn');
    addEducationItemBtn.addEventListener("click", addEducationItem );

    // Кнопка добавления сертификата
    const addCertificateItemBtn = document.querySelector('.user-certificate__btn');
    addCertificateItemBtn.addEventListener("click", addCertificateItem);

    // Кнопка добавления дополнительного образования
    const addAdditionalItemBtn = document.querySelector('.user-additional__btn');
    addAdditionalItemBtn.addEventListener("click", addAdditionalItem);

    // Кнопка добавления скилла
    const addSkillItemBtn = document.querySelector('.user-skill__btn');
    addSkillItemBtn.addEventListener("click", addSkillItem);

    // Кнопки удаления
    let deleteEducationItemBtn;
    let deleteCertificateItemBtn;
    let deleteAdditionalItemBtn;
    let deleteSkillItemBtn;

    //Отправка формы - валидация
    const $form = document.getElementById('datasite');
    //Устанавливаем валидацию дат в форме
    $form.user_education_yearEnd.setAttribute('max', nowDate.getFullYear() + 1);
    $form.user_certificate_yearBegin.setAttribute('min', getAttrDate(nowDate, -5));
    $form.user_certificate_yearBegin.setAttribute('max', getAttrDate(nowDate, 0));
    $form.user_certificate_yearEnd.setAttribute('min', getAttrDate(nowDate, 0));
    $form.user_certificate_yearEnd.setAttribute('max', getAttrDate(nowDate, 5));

    //Submit
    $form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm($form);   
    });

    //Превью фотографии
    let reader = new FileReader();

    reader.onload = function(e){
        document.querySelector('.photo_preview').innerHTML = `<img src="${e.target.result}">`;
    };

    $form.user_photo.addEventListener("change", loadImageFile);


    function loadImageFile() {
        var file = $form.user_photo.files[0];
        reader.readAsDataURL(file);
    }


    function getAttrDate(nowdate, year){
        if(nowDate.getDate().toString().length === 2){
            return `${nowDate.getFullYear() + year}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
        }

        return `${nowDate.getFullYear() + year}-${nowDate.getMonth() + 1}-0${nowDate.getDate()}`;
    }


    function deleteItem(e){
        // Функция инициализации кнопок удаления пунктов, добавление слушателей
        let deleteItemBtn = document.querySelectorAll('.delete-button');

        deleteItemBtn.forEach( item => {
            item.addEventListener("mouseover", function(e){
                let hoverItem = e.target.closest('.item');
                hoverItem.classList.add('hover');
            });

            item.addEventListener("mouseout", function(e){
                let hoverItem = e.target.closest('.item');
                hoverItem.classList.remove('hover');
            });
        });
    };

    function addEducationItem(e){
        e.preventDefault();

        let newItem = document.createElement('div');
        newItem.classList.add('user-education__item');
        newItem.classList.add('item');
        newItem.innerHTML = `                
        <label>Год окончания:</label>
        <input type="number" name="user_education_yearEnd" max = ${nowDate.getFullYear() + 1} placeholder="2020" required>
        <label>Уровень подготовки:</label>
        <select name="user_education_degree">
            <option value="Диплом">Диплом</option>
            <option value="Интернатура">Интернатура</option>
            <option value="Ординатура">Ординатура</option>
            <option value="Профессиональная переподготовка">Профессиональная переподготовка</option>
        </select>
        <label>Университет:</label>
        <input type="text" name="user_education_university" placeholder="Например, Санкт-Петербургский государственный медицинский университет" required>
        <label>Специальность:</label>
        <select name="user_education_speciality">
            <option value="Стоматология">Стоматология</option>
            <option value="Стоматология общей практики">Стоматология общей практики</option>
            <option value="Стоматология терапевтическая">Стоматология терапевтическая</option>
            <option value="Стоматология ортопедическая">Стоматология ортопедическая</option>
            <option value="Стоматология хирургическая">Стоматология хирургическая</option>
            <option value="Стоматология детская">Стоматология детская</option>
            <option value="Ортодонтия">Ортодонтия</option>
        </select>
        <button class="education-delete__btn delete-button">Удалить</button>`;
        userEducationBox.appendChild(newItem);

        // инициализируем кнопки закрытия и вешаем слушателя
        deleteEducationItemBtn = document.querySelectorAll('.education-delete__btn');
        deleteEducationItemBtn.forEach( item => {
            item.addEventListener("click", deleteEducationItem);
        });

        deleteItem();
    };

    function deleteEducationItem(e){
        e.preventDefault();
        let deleteItem = e.target.closest('.user-education__item');
        userEducationBox.removeChild(deleteItem);
    };

    function addCertificateItem(e){
        e.preventDefault();

        let newItem = document.createElement('div');
        newItem.classList.add('user-certificate__item');
        newItem.classList.add('item');
        newItem.innerHTML = `                
        <label>Специальность:</label>
        <select name="user-certificate-speciality">
            <option value="Стоматология">Стоматология</option>
            <option value="Стоматология общей практики">Стоматология общей практики</option>
            <option value="Стоматология ортопедическая">Стоматология ортопедическая</option>
            <option value="Стоматология хирургическая">Стоматология хирургическая</option>
            <option value="Стоматология детская">Стоматология детская</option>
            <option value="Ортодонтия">Ортодонтия</option>
        </select>
        <label>Выдан:</label>
        <input type="date" name="user_certificate_yearBegin" required min="${getAttrDate(nowDate, -5)}" max="${getAttrDate(nowDate, 0)}">
        <label>Действителен до:</label>
        <input type="date" name="user_certificate_yearEnd" required min="${getAttrDate(nowDate, 0)}" max="${getAttrDate(nowDate, 5)}">
        <button class="certificate-delete__btn delete-button">Удалить</button>`;
        userCertificateBox.appendChild(newItem);

        // инициализируем кнопки закрытия и вешаем слушателя
        deleteCertificateItemBtn = document.querySelectorAll('.certificate-delete__btn');
        deleteCertificateItemBtn.forEach( item => {
            item.addEventListener("click", deleteCertificateItem);
        });

        deleteItem();
    };

    function deleteCertificateItem(e){
        e.preventDefault();
        let deleteItem = e.target.closest('.user-certificate__item');
        userCertificateBox.removeChild(deleteItem);
    };

    function addAdditionalItem(e){
        e.preventDefault();

        let newItem = document.createElement('div');
        newItem.classList.add('user-additional__item');
        newItem.classList.add('item');
        newItem.innerHTML = `                
        <label>Название курса, семинара</label>
        <input
          type="text"
          placeholder="Эндодонтия №1. Практические нюансы каждодневной эндодонтии"
          name ="user_additional_title"
        />
        <label>Название организации обучения или ФИО лектора</label>
        <input type="text" placeholder="Например, А. Павлов" name ="user_additional_author"/>
        <button class="additional-delete__btn delete-button">Удалить</button>`;
        userAdditionalBox.appendChild(newItem);

        // инициализируем кнопки закрытия и вешаем слушателя
        deleteAdditionalItemBtn = document.querySelectorAll('.additional-delete__btn');
        deleteAdditionalItemBtn.forEach( item => {
            item.addEventListener("click", deleteAdditionalItem);
        });

        deleteItem();
    };
    
    function deleteAdditionalItem(e){
        e.preventDefault();
        let deleteItem = e.target.closest('.user-additional__item');
        userAdditionalBox.removeChild(deleteItem);
    };


    function addSkillItem(e){
        e.preventDefault();

        let newItem = document.createElement('div');
        newItem.classList.add('user-skill__item');
        newItem.classList.add('item');
        newItem.innerHTML = `                
        <label>Название курса, семинара</label>
        <input type="text" placeholder="Эндодонтия №1. Практические нюансы каждодневной эндодонтии">
        <label>Название организации обучения или ФИО лектора</label>
        <input type="text" placeholder="Например, А. Павлов">
        <button class="skill-delete__btn delete-button">Удалить</button>`;
        userSkillBox.appendChild(newItem);

        // инициализируем кнопки закрытия и вешаем слушателя
        deleteSkillItemBtn = document.querySelectorAll('.skill-delete__btn');
        deleteSkillItemBtn.forEach( item => {
            item.addEventListener("click", deleteSkillItem);
        });

        deleteItem();
    };
    
    function deleteSkillItem(e){
        e.preventDefault();
        let deleteItem = e.target.closest('.user-skill__item');
        userSkillBox.removeChild(deleteItem);
    };

});