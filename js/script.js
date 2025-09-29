'use strict';

function SkillData(name , level, cssClass){
    this.name = name;
    this.level = level;
    this.cssClass = cssClass;
}

const data = [
    new SkillData('Си', 80, 'skill-item_c' ),
    new SkillData('С++', 50, 'skill-item_cpp' ),
    new SkillData('FPGA', 60, 'skill-item_fpga' ),
    new SkillData('Python', 50, 'skill-item_python' ),
];


const skillList = document.querySelector('.skill-list')

data.forEach(item => {
    console.log(item);

    const dd = document.createElement('dd');
    const dt = document.createElement('dt');
    const div = document.createElement('div');

    dt.classList.add('skill-item');
    dt.classList.add(item.cssClass);
    dd.classList.add('skill-level');

    dt.innerText = item.name;

    div.style.width = item.level + '%';

    dd.append(div);

    skillList.append(dt);
    skillList.append(dd);
});
