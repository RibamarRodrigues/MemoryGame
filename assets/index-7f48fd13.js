(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function m(){return`
    <section class="home-page">
        <h1>Matching<br>Game</h1>
        <div class="geral">
            <div class="start visible">
                <button class="single" id="single">Single Player</button>
                <button class="multi" id="multi">Multi Player</button>
            </div>
        </div>
        <div class="difficulty">
            <p>Select Difficulty:</p>
            <input type="radio" name="difficulty" id="easy" checked>
            <input type="radio" name="difficulty" id="medium">
            <input type="radio" name="difficulty" id="hard">
            <button class="start-game">Start</button>
        </div>
        <div class= "last-btns">
            <button class="back-btn" id="back">Back</button>
            <button class="rules">Rules</button>
        </div>
    </section>
    `}function h(){return`
    <div class="player-name single-player">
        <div class="error-box">
            <label for="player">Your Name:</label>
            <input type="text" name="player" id="player1" maxlength="16"></input>
            <p class="error-message">Choose a name</p>
        </div>
    </div>`}function b(){return`
    <div class="player-name multi-player">
        <div class="error-box">
            <label for="player1">Player1 Name:</label>
            <input type="text" name="player1" id="player1" maxlength="12">
            <p class="error-message">Choose a name</p>
        </div>
        <div class="error-box">
            <label for="player2">Player2 Name:</label>
            <input type="text" name="player2" id="player2" maxlength="12">
            <p class="error-message two">Choose a name</p>
        </div>
    </div>`}function S(t){const e=["dog","car","frog","mug-saucer"];t=="medium"?e.push("spider","user-secret"):t=="hard"&&e.push("spider","user-secret","motorcycle","truck-medical");const r=[...e,...e];return r.sort(()=>Math.random()-.5),r.map(n=>`
        <div class="container">
            <div class="flip">
                <img src="../public/fundo.jpg" class="front" data-image="${n}" alt="fundo do card game">
                <img src="../public/${n}.svg" class="back" alt="${n} do card game">
            </div>
        </div>`).join("")}function q(t,e){return e==""?`
        <div class='placar' id="single">
            <div class='player1 score current'>
                <p>${t}</p>
                <Span>0</Span>
            </div>

            <div class='movements'>
                <p>Movements:</p>
                <Span>0</Span>
            </div>

            <div class="timer">
                <p>Time:</p>
                <Span>00:00</Span>
            </div>
        </div>`:`
        <div class='placar' id="multi">
            <div class="player1 score current">
                <p>${t} </p>
                <Span>0</Span>
            </div>

            <div class="timer">
                <p>Time: </p>
                <Span>00:00</Span>
            </div>

            <div class="player2 score">
                <p>${e} </p>
                <Span>0</Span>
            </div>
        </div>`}function C(t,e,r){const s=S(r);return`
    <main>
        ${q(t,e)}
        <section class="board-game" id="${r}">
            ${s}
        </section>
    </main>
    `}function $(){const t=document.querySelector(".timer > span");ss++,ss==60&&(ss=0,mn++),mn==60&&clearInterval(cron);let e=(mn<10?`0${mn}`:mn)+":"+(ss<10?`0${ss}`:ss);t.textContent=e}function L(){window.cron=setInterval($,1e3),window.ss=0,window.mn=0}function l(){clearInterval(cron)}function A(){const t=document.querySelectorAll(".score > p"),e=t[1]?t[1].textContent:"";let r=document.querySelector(".board-game");r=r.getAttribute("id");const s=document.querySelector(".home"),n=document.querySelector(".try-again");s.addEventListener("click",()=>{location.reload()}),n.addEventListener("click",()=>{p(t[0].textContent,e,r)})}function x(t){const e=document.querySelectorAll(".container"),r=document.querySelectorAll(".score > span");let s=[];t=="single"?e.length/2==r[0].textContent&&(d(t,r),l()):(r.forEach(n=>s.push(Number(n.textContent))),s=s.reduce((n,o)=>n+o),e.length/2==s&&(d(t,r),l()))}function d(t,e){const r=document.querySelector(".score.current > p").textContent,s=document.querySelector(".timer > span").textContent,n=Number(e[0].textContent),o=e[1]?Number(e[1].textContent):"",c=document.querySelector("#root"),y=k(t,s,r,n,o);if(c.insertAdjacentHTML("beforeend",y),t=="single"){const a=document.querySelector(".movements > span").textContent,g=Math.floor(n/Number(a)*100),v=document.querySelector(".hit-rate");v.textContent=`Hit Rate: ${g}%`}else if(n==o){const a=document.querySelector(".player-wins");a.textContent="DRAW !!!",a.style.color="var(--color-final-game-draw)"}A()}function k(t,e,r,s,n){const o=`
    <div class="end-screen">
        <h1>Game Complete!!!</h1>
        <p>Time: ${e}</p>
        <p class="hit-rate">Hit Rate: 0%</p>
        <div class="end-screen-buttons">
            <button class="home">Home</button>
            <button class="try-again">Try Again</button>
        </div>
    </div>
    `,c=`
    <div class="end-screen">
        <h1 class="player-wins">${r} Wins!!!</h1>
        <p>Time: ${e}</p>
        <p class="score-multi">Score: ${Math.max(s,n)} vs ${Math.min(s,n)}</p>
        <div class="end-screen-buttons">
            <button class="home">Home</button>
            <button class="try-again">Try Again</button>
        </div>
    </div>
    `;return t=="single"?o:c}function P(t){const e=document.querySelector(".placar"),r=e.getAttribute("id"),n=document.querySelector(".current").querySelector(".score > span");r=="single"&&document.querySelector(".movements > span").textContent++,t[0]==t[2]?(n.textContent++,x(r)):(r=="multi"&&H(e),t[1].classList.remove("clicked"),t[3].classList.remove("clicked"))}function H(t){const e=Array.from(t.querySelectorAll(".score"));e[0].classList.toggle("current"),e[1].classList.toggle("current")}let i=[];function B(t){const e=t.currentTarget;e.classList.contains("clicked")||(i.length==0?(i.push(t.target.getAttribute("data-image"),e),e.classList.add("clicked")):i.length==2&&(i.push(t.target.getAttribute("data-image"),e),e.classList.add("clicked"),setTimeout(()=>{P(i),i=[]},1e3)))}function E(){if(T())return;const t=document.querySelector("#player1").value,e=document.querySelector("#player2")?document.querySelector("#player2").value:"";let r=document.querySelectorAll('input[name="difficulty"]');r=Array.from(r).filter(s=>s.checked),r=r[0].getAttribute("id"),p(t,e,r)}function p(t,e,r){const s=C(t,e,r),n=document.querySelector("#root");for(;n.firstChild;)n.removeChild(n.firstChild);n.insertAdjacentHTML("Beforeend",s),L(),document.querySelectorAll(".container").forEach(c=>{c.addEventListener("click",B)})}function T(){const t=document.querySelector("#player1"),e=document.querySelector("#player2"),r=document.querySelectorAll(".error-message");let s=0;return t.value?(t.classList.remove("error"),r[0].classList.remove("visible")):(t.classList.add("error"),r[0].classList.add("visible"),s++),e&&!e.value?(e.classList.add("error"),r[1].classList.add("visible"),s++):e&&(e.classList.remove("error"),r[1].classList.remove("visible")),s>0}function u(t){const e=t.target,r=e.closest(".geral");for(;r.firstChild;)r.removeChild(r.firstChild);if(e.getAttribute("id")=="single"){const o=h();r.insertAdjacentHTML("Beforeend",o)}else{const o=b();r.insertAdjacentHTML("Beforeend",o)}document.querySelector(".difficulty").style.display="grid",document.querySelector(".back-btn").classList.add("visible"),document.querySelector(".start-game").addEventListener("click",E)}function M(){const t=document.querySelector("#root");for(;t.firstChild;)t.removeChild(t.firstChild);const e=m();t.insertAdjacentHTML("Beforeend",e),f()}function f(){const t=document.querySelector(".single"),e=document.querySelector(".multi"),r=document.querySelector(".back-btn");t.addEventListener("click",u),e.addEventListener("click",u),r.addEventListener("click",M)}const G=document.querySelector("#root"),w=m();G.insertAdjacentHTML("Beforeend",w);f();
