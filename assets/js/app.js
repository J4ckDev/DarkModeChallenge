const btnSwap = document.getElementById("change-theme");
const userConf = window.matchMedia('(prefers-color-scheme: dark)')
const localConf = localStorage.getItem('theme');

if (localConf === 'dark') {
    document.body.classList.add('dark-theme');
    btnSwap.setAttribute('checked', true);
} else if (localConf === 'light') {
    document.body.classList.add('light-theme');
}

btnSwap.addEventListener('change', () => {
    let themeColor;
    if (userConf.matches) {        
        document.body.classList.toggle('light-theme')
        themeColor = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        themeColor = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', themeColor)
})