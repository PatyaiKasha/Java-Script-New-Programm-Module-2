/*Модуль 2 - Домашнее задание

Есть три курорта: taba, sharm или hurgada.

Необходимо через prompt попросить ввести число, от 1 до 3 - х.

В тексте prompt необходимо написать какое число соотвествует
какому курорту, на ваш выбор.

После этого вывести сообщение о том, что пользователь
выбрал такой - то курорт или сообщение о том, что введено число, варианта курорта для которого не было.*/

const taba = 'Таба';
const sharm = 'Шарм';
const hurgada = 'Хургада';

let resortName;

let numOfTickets;

document.querySelector('.selectResort').onclick = selectResort;

function selectResort(params) {
    let resortNum = prompt(`
    Выберите курорт !
        1 - Таба;
        2 - Шарм;
        3 - Хургада;
    `, 1);

    if (resortNum == 1) {
        resortName = taba;
        numOfTickets = 6;
    } else if (resortNum == 2) {
        resortName = sharm;
        numOfTickets = 15;
    } else if (resortNum == 3) {
        resortName = hurgada;
        numOfTickets = 25;
    } else {
        alert('Такого курорта нет');
        selectResort();
    }
    bookResort(resortNum, resortName, numOfTickets);
}

/*
  Пользователь через prompt вводит число участников группы. 
  Необходимо проверить является ли введенные данные целым положительным числом. Вывести alert в случае ошибочного ввода.
        
  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    taba - 6
    sharm - 15
    hurgada - 25
    
  Если количество мест позволяет, то вывести пользователю сообщение через confirm что есть место в группе такой-то, согласен ли пользоваетель быть в этой группе?
  
  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.
  
  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/

function bookResort(params1, params2, params3) {
    console.log(params1 + ' ' + params2 + ' ' + params3);

    let resortName = params2;
    let numOfTickets = params3;

    let bookResort = prompt(`
    Вы выбрали курорт ${resortName}
    Введите кол-во мест в группе на ${resortName}:
    `, 1);

    if (params1 == 1 && bookResort > 0 && bookResort <= 6 && bookResort % 1 == 0) {
        isBook(resortName, bookResort, numOfTickets);
    } else if (params1 == 2 && bookResort > 0 && bookResort <= 15 && bookResort % 1 == 0) {
        isBook(resortName, bookResort, numOfTickets);
    } else if (params1 == 3 && bookResort > 0 && bookResort <= 25 && bookResort % 1 == 0) {
        isBook(resortName, bookResort, numOfTickets);
    } else {
        alert(`В группе на ${params2} нет такого кол-ва мест !
               Выберите другой курорт !`);
        selectResort();
    }
}

function isBook(params1, params2, params3) {
    let isBook = confirm(`Все ОК, отправляемся на ${params1}`);
    if (isBook) {
        let ticketsLeft = params3 - params2;
        alert(`Еще осталось ${ticketsLeft} мест в группу на ${params1}`);
    }
}