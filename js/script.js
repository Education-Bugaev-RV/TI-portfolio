'use strict';

function SkillData(name , level, icon){
    this.name = name;
    this.level = level;
    this.iconName = icon;
}

const skills = {
    data : [
        new SkillData('Си', 80, 'c.svg'),
        new SkillData('С++', 50, 'c++.svg'),
        new SkillData('FPGA', 60, 'fpga.svg'),
        new SkillData('Python', 50, 'python.svg'),
    ],

    generateList : function(skillList) {
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
    }
}

const skillList = document.querySelector('.skill-list')

skills.generateList(skillList);