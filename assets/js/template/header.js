const headerInner = document.createElement("div");
headerInner.classList.add("inner");
headerInner.innerHTML = `<h1 class="logo"></h1>
<nav class="gnb">
    <ul>
        <li><a href="popup.html">popup</a></li>
        <li><a href="tab.html">tab</a></li>
    </ul>
</nav>
<ul class="util"></ul>`;

console.log(headerInner);

document.querySelector(".header").appendChild(headerInner);