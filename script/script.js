var toggleBtn = document.querySelector(".navbar-toggleBtn");
var menu = document.querySelector(".navbar-menu");
var icons = document.querySelector(".navbar-icons");

toggleBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});

// 토글버튼 클릭시, 메뉴와 SNS 아이콘 나오게 하는 스크립트 
//.toggle():선택한 요소가 보이면 숨기고, 숨겨져 있으면 나타냄