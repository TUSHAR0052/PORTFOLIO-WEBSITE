const text = document.querySelector(".text");
const textLoad = ()=>
{
    setTimeout(()=>
    {
        text.textContent = "BACKEND DEVELOPER";
    },18000);

    setTimeout(()=>
    {
        text.textContent = "UI/UX DESIGNER";
    },8000);

    setTimeout(()=>
    {
        text.textContent = "WEB DEVELOPER";
    },4000);
}
textLoad();
setInterval(textLoad,12000);