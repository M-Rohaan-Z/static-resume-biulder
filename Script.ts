document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLDivElement;

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
                toggleSkillsButton.textContent = 'Hide Skills';
            } else {
                skillsSection.style.display = 'none';
                toggleSkillsButton.textContent = 'Show Skills';
            }
        });
    }
});