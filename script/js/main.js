document.addEventListener('DOMContentLoaded',() => {
    //ПЕРЕМЕННЫЕ
    const projectsOverlay = document.querySelector('#projects-overlay'),
          projectsBtn = document.querySelector('.projects-btn'),
          projectsClose = document.querySelector('.projects-close'),
          projects = document.querySelector('#projects');

    let isMouseDown = false; 

    //ФУНКЦИИ

    function openProjects(){
        if(projectsOverlay && projectsBtn && projects){
            projectsOverlay.classList.add('active');
            projects.classList.add('open');
        }
    }

    function closeProjects(){
        if(projectsOverlay && projectsClose){
            projectsOverlay.classList.remove('active');
            projects.classList.remove('open');
        }
    }

    //СОБЫТИЯ
    projectsOverlay.addEventListener('mousedown', (e) => {
        isMouseDown = e.target !== projectsOverlay;
    });

    if(projectsBtn && projectsOverlay && projectsClose && projects){
        projectsBtn.addEventListener('click', openProjects);
        projectsClose.addEventListener('click', () => {
            isMouseDown = false;
            closeProjects();
        });
        projectsOverlay.addEventListener('click', (e) => {
            if(e.target === projectsOverlay && !isMouseDown){
                closeProjects();
            }
        });
    }
});