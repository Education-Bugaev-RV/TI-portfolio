'use strict';

function SkillData(name , level, cssClass, icon){
    this.name = name;
    this.level = level;
    this.cssClass = cssClass;
    this.iconName = icon;
}

const data = [
    new SkillData('Си', 80, 'skill-item_c', 'c.svg'),
    new SkillData('С++', 50, 'skill-item_cpp', 'c++.svg'),
    new SkillData('FPGA', 60, 'skill-item_fpga', 'fpga.svg'),
    new SkillData('Python', 50, 'skill-item_python', 'python.svg'),
];


const skillList = document.querySelector('.skill-list')

data.forEach(item => {

    const dd = document.createElement('dd');
    const dt = document.createElement('dt');
    const div = document.createElement('div');

    dt.classList.add('skill-item');
    dt.classList.add(item.cssClass);
    dd.classList.add('skill-level');

    dt.innerText = item.name;
    dt.style.backgroundImage = `url('./img/skills/${item.iconName}')`;

    div.style.width = item.level + '%';

    dd.append(div);

    skillList.append(dt);
    skillList.append(dd);
});
