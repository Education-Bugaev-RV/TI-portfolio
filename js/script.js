'use strict';

//--------_skills_---------

function SkillData(name, level, icon) {
    this.name = name;
    this.level = level;
    this.iconName = icon;
}

function GetComparer(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        }

        if (a[prop] > b[prop]) {
            return 1;
        }
        return 0;
    }
}

const skills = {
    data: [
        new SkillData('Си', 80, 'c.svg'),
        new SkillData('C++', 50, 'c++.svg'),
        new SkillData('FPGA', 60, 'fpga.svg'),
        new SkillData('Python', 50, 'python.svg'),
    ],

    sortMode: null,

    generateList: function (skillList) {
        skillList.innerHTML = '';
        this.data.forEach(item => {
            const dd = document.createElement('dd');
            const dt = document.createElement('dt');
            const div = document.createElement('div');

            dt.classList.add('skill-item');
            dd.classList.add('skill-level');

            dt.innerText = item.name;
            dt.style.backgroundImage = `url('./img/skills/${item.iconName}')`;

            div.style.width = item.level + '%';

            dd.append(div);

            skillList.append(dt, dd);
        });
    },

    sortByProp: function (prop) {
        if (this.sortMode != prop) {
            this.sortMode = prop;
            this.data.sort(GetComparer(prop));
            console.log(`Отсортировано по ${prop}:`, this.data);
        }
        else {
            this.data.reverse();
            console.log('Инвертировали порядок сортировки:', this.data);
        }

        this.generateList(skillList);
    }
}

const skillList = document.querySelector('.skill-list')

skills.generateList(skillList);

const sortBtnsBlock = document.querySelector('.container-skills-header-btns');

sortBtnsBlock.addEventListener('click', (e) => {
    const target = e.target;

    if (target.nodeName != 'BUTTON')
        return;

    switch (target.dataset.type) {
        case 'name':
        case 'level':
            skills.sortByProp(target.dataset.type);
            break;

        default:
            console.error('Неизвестная кнопка');
            break;
    }
})

//--------_menu_---------

const menu = {
    nav: document.querySelector('.main-nav'),
    navBtn: document.querySelector('.nav-btn'),

    close: function () {
        this.nav.classList.add('main-nav_closed');

        this.navBtn.classList.remove('nav-btn_close');
        this.navBtn.classList.add('nav-btn_open');

        this.navBtn.children[0].innerText = 'Открыть меню'
    },

    open: function () {
        this.nav.classList.remove('main-nav_closed');

        this.navBtn.classList.remove('nav-btn_open');
        this.navBtn.classList.add('nav-btn_close');

        this.navBtn.children[0].innerText = 'Закрыть меню'
    }
}

menu.navBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn_open')) {
        menu.open();
    } else {
        menu.close();
    }
})

menu.close();