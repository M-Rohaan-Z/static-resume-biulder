document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsSection = document.getElementById('skills');
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
                toggleSkillsButton.textContent = 'Hide Skills';
            }
            else {
                skillsSection.style.display = 'none';
                toggleSkillsButton.textContent = 'Show Skills';
            }
        });
    }
});
