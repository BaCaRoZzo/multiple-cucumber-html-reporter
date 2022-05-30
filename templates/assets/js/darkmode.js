var darkMode = 'darkmode'

function applyDarkMode() {
    document.getElementById('features-table').classList.toggle('table-striped');
    document.getElementById('darkmodeicon')?.classList.toggle('fa-moon-o');
    document.getElementById('darkmodeicon')?.classList.toggle('fa-sun-o');
    applyFontStyle();
}

function saveState() {
    if(isDarkModeOn()) {
        window.localStorage['darkmode'] = 'on';
    } else {
        window.localStorage['darkmode'] = 'off';
    }
}

function applyFontStyle() {
    document.body.classList.toggle(darkMode);
}


function isDarkModeOn() {
    var toggle = document.getElementById('darkCheck');
    return toggle.checked;
}

window.onload = function() {
    if(window.localStorage['darkmode'] === 'on') {
        applyDarkMode();
        document.getElementById('darkCheck').checked = true;
    }
}
