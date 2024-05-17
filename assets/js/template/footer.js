const footerInner = document.createElement("div");
footerInner.classList.add("inner");
footerInner.innerHTML = `
<p class="">hi mose</p>
<ul class="">
    <li><a href="https://naver.com"></a></li>
    <li><a href="https://naver.com"></a></li>
</ul>
`;

console.log(footerInner);
document.querySelector(".footer").appendChild(footerInner);