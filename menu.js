document.addEventListener('click', function(e) {
    if (e.target.id=='closemenu') {
        document.getElementById('closemenu').classList.remove('close');
        document.getElementById('openmenu').classList.add('open');
        document.querySelector('.menuspi').classList.remove('close');
        document.querySelector('.menuspi').classList.add('open');
    }
})
document.addEventListener('click', function(e) {
    if (e.target.id=='openmenu') {
        document.getElementById('openmenu').classList.remove('open');
        document.getElementById('closemenu').classList.add('close');
        document.querySelector('.menuspi').classList.remove('open');
        document.querySelector('.menuspi').classList.add('close');
    }
})