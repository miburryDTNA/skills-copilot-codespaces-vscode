function skillsMember() {
    let skills = document.querySelectorAll('.skills__item');
    let skillsPercent = document.querySelectorAll('.skills__percent');
    let skillsPercentValue = document.querySelectorAll('.skills__percent-value');
    let skillsPercentValueText = document.querySelectorAll('.skills__percent-value-text');

    for (let i = 0; i < skills.length; i++) {
        skills[i].addEventListener('mouseover', function () {
            skillsPercent[i].style.width = skillsPercentValue[i].textContent;
            skillsPercentValueText[i].style.opacity = '1';
        });
        skills[i].addEventListener('mouseout', function () {
            skillsPercent[i].style.width = '0';
            skillsPercentValueText[i].style.opacity = '0';
        });
    }
}