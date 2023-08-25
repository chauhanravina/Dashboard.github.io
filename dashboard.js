const sidemenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const themetoggle = document.querySelector(".theme-toggle");

menubtn.addEventListener('click', () =>
{
    sidemenu.style.display = 'block';
})

closebtn.addEventListener('click', () =>
{
    sidemenu.style.display = 'none'
})

themetoggle.addEventListener('click', () =>
{
    document.body.classList.toggle('dark-theme-variables');
    themetoggle.querySelector('span:nth-child(1)').classList.toggle('active');
themetoggle.querySelector('span:nth-child(2)').classList.toggle('active');
})
