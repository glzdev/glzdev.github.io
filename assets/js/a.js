const tT=document.querySelector(".time b"),wD=document.querySelector(".word"),hT=document.querySelector(".hint span"),aC=document.querySelector("[data-alert-container]"),gG=document.querySelector("[data-guess-grid]"),kB=document.querySelector("[data-keyboard]"),FAD=500;let cW={},sc=0,wC=0,tL=46,mW=410,lSpcs,rW,cRs,aWs=[],slts,sSqrs=[],gSqr,wSqr,timeout,timer_on=0;function gNWD(){if(0==aWs.length||wC>=mW){stpInt();return}let e=Math.floor(Math.random()*aWs.length),n=(cW=aWs[e]).wR.split("");lSpcs=cW.lCs,cRs=Array.from(rW=cW.wR);for(let i=n.length-1;i>0;i--){let a=Math.floor(Math.random()*(i+1));[n[i],n[a]]=[n[a],n[i]]}wD.innerText=n.join(""),hT.innerText=cW.hT,aWs.splice(e,1),lSpcs.forEach((e,n)=>{(rE=document.createElement("div")).setAttribute("class","tile"),rE.setAttribute("id","guess-letter-"+n),gG.append(rE)}),sInt()}function sInt(){document.addEventListener("click",hMC),document.addEventListener("keydown",hKP)}function stpInt(){document.removeEventListener("click",hMC),document.removeEventListener("keydown",hKP)}function hMC(e,n,i){if(e.target.matches("[data-key]")){let a=gATs();if(a.length>=rW.length)return;let _=gG.querySelector(":not([data-letter])");_.dataset.letter=e.target.dataset.key.toLowerCase(),_.textContent=e.target.dataset.key,_.dataset.state="active",setTimeout(()=>{_.classList.add("bounce")},500*i/2),_.addEventListener("animationend",()=>{_.classList.remove("bounce")}),e.target.dataset.key.toLowerCase()===cRs[0]&&(_.dataset.letter,setTimeout(()=>{_.classList.add("coloredA")},500*i/2),_.addEventListener("animationend",()=>{_.classList.remove("coloredA")}));return}if(e.target.matches("[data-enter]")){suG();return}if(e.target.matches("[data-delete]")){dKey();return}}function hKP(e){if("Enter"===e.key){suG();return}if("Backspace"===e.key||"Delete"===e.key){dKey();return}if(e.key.match(/^[A-Za-zÑñ]$/)){pKey(e.key);return}}function pKey(e,n,i){let a=gATs();if(a.length>=rW.length)return;let _=gG.querySelector(":not([data-letter])");if(_.dataset.letter=e.toLowerCase(),_.textContent=e,_.dataset.state="active",setTimeout(()=>{_.classList.add("bounce")},500*i/2),_.addEventListener("animationend",()=>{_.classList.remove("bounce")}),cRs[0]===e){_.dataset.letter,setTimeout(()=>{_.classList.add("coloredA")},500*i/2),_.addEventListener("animationend",()=>{_.classList.remove("coloredA")}),_.addEventListener("transitionend",()=>{_.classList.remove("flip")});return}}function dKey(){let e=gATs(),n=e[e.length-1];if(null==n)return;n.textContent="",delete n.dataset.state,delete n.dataset.letter;let i=gG.querySelector(":not([data-letter])");i.classList.remove("colored")}function suG(){let e=[...gATs()];if(e.length!==rW.length){sA("No hay suficientes letras"),sT(e);return}let n=e.reduce((e,n)=>e+n.dataset.letter,"");if(setTimeout(()=>{(function e(){let n=document.querySelectorAll("[id^='guess-letter']");for(let i of n)i.remove()})(),gNWD()},3e3),rW!=n){if(sT(e),sA("Palabra incorrecta"),stpInt(),sSqrs.length<=18){(wSqr="⬜").repeat(sc),sSqrs.push(wSqr),slts=sSqrs.join("");let i=4;for(;i<sSqrs.length;)sSqrs.splice(i,1,"%0a"),i+=5;4===sSqrs.length&&sSqrs.splice(i,1,"%0a"),9===sSqrs.length&&sSqrs.splice(i,1,"%0a"),14===sSqrs.length&&sSqrs.splice(i,1,"%0a")}console.log(slts);return}if(sSqrs.length<=18){(gSqr="\uD83D\uDFE9").repeat(sc),sSqrs.push(gSqr),slts=sSqrs.join("");let a=4;for(;a<sSqrs.length;)sSqrs.splice(a,1,"%0a"),a+=5;4===sSqrs.length&&sSqrs.splice(a,1,"%0a"),9===sSqrs.length&&sSqrs.splice(a,1,"%0a"),14===sSqrs.length&&sSqrs.splice(a,1,"%0a")}if(410==++sc){clearTimeout(t),sFM(),stpInt();return}if(0===aWs.length){clearTimeout(t),sTAM(),stpInt();return}tL+=8,stpInt(),e.forEach((...e)=>fT(...e,n))}function zP(){0==sSqrs.length&&(wSqr="⬜",sSqrs.push(wSqr),slts=sSqrs.join("")),sSqrs.length>0&&(slts=sSqrs.pop(""))}function fT(e,n,i,a){let _=e.dataset.letter;setTimeout(()=>{e.classList.add("flip")},500*n/2),e.addEventListener("transitionend",()=>{e.classList.remove("flip"),rW[n]===_?(e.dataset.state="correct",e.classList.remove("colored")):e.dataset.state="wrong"})}function sA(e,n=1e3){let i=document.createElement("div");i.textContent=e,i.classList.add("alert"),aC.prepend(i),null!=n&&setTimeout(()=>{i.classList.add("hide"),i.addEventListener("transitionend",()=>{i.remove()})},n)}function sT(e){e.forEach(e=>{e.classList.add("shake"),e.addEventListener("animationend",()=>{e.classList.remove("shake")},{once:!0})})}function gATs(){return gG.querySelectorAll('[data-state="active"]')}function T(){timer_on||(timer_on=1,function e(){tL--,tT.innerText=tL,timeout=setTimeout(e,1e3),0==tL&&0==sSqrs.length&&(sZZM(),stpInt(),clearTimeout(timeout),console.log("No acertaste nada.")),0!=tL||sSqrs.includes(wSqr)||0!=!sSqrs.length||(sTAM(),stpInt(),clearTimeout(timeout),console.log(`\xa1Bien hecho! Lograste conseguir ${sc} palabras de forma consecutiva`)),0==tL&&sSqrs.includes(wSqr)&&(sZSM(),stpInt(),clearTimeout(timeout),console.log(`Lograste encontrar ${sc} palabras de forma no consecutiva.`))}())}function hTP(){let e=function e(n){let i=document.createElement("template");return i.innerHTML=n.trim(),i.content.firstElementChild}(`
    <div class="layer">
        <div class="how-to-play-container">
            <div class="content-container">
                <button id="close" class="module-close-content">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="game-icon" data-testid="icon-close"><path fill="var(--color-tone-1)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </button>
                <h1>\xbfC\xf3mo jugar?</h1>
                <h2>\xbfCu\xe1ntas palabras en forma consecutiva puedes encontrar?</h2><br>
                <!--<h2>Encuentra la palabra oculta antes de que el tiempo limite termine.</h2>-->

                <section class"help-instructions">
                    <ul>
                        <li>Las palabras ocultas podr\xe1n tener de 4 a 7 letras.</li>
                        <li>La letra correcta inicial siempre cambiar\xe1 de color amarillo durante un breve momento</li>
                    </ul>
                    <div class="example-module">
                        <p>
                            <strong>Ejemplos</strong>
                        </p>
                        <div class="exampleOne">
                            <svg width="100%" height="100%" viewBox="0 0 1225 275" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:1.5;"><g transform="matrix(1,0,0,1,0,-0.5)">
                            <g id="_01" serif:id="01" transform="matrix(1,0,0,1,1.13687e-13,0.292)"><rect x="8.333" y="8.333" width="259.592" height="258.75" style="fill:none;stroke:rgb(86,87,88);stroke-width:11.5px;"/></g><g id="_02" serif:id="02" transform="matrix(1,0,0,1,1.13687e-13,0.292)"><rect x="324.556" y="8.333" width="259.592" height="258.75" style="fill:none;stroke:rgb(86,87,88);stroke-width:11.5px;"/></g><g id="_03-background-yellow" serif:id="03 background-yellow" transform="matrix(1,0,0,1.04026,1.13687e-13,-5.25004)"><rect x="640.677" y="8.333" width="259.592" height="258.75" style="fill:rgb(255,223,109);"/></g><g id="_04" serif:id="04" transform="matrix(1,0,0,1,1.13687e-13,0.292)"><rect x="957.075" y="8.333" width="259.592" height="258.75" style="fill:none;stroke:rgb(211,214,218);stroke-width:11.5px;"/></g><g transform="matrix(1,0,0,1,1.13687e-13,0.292)"><path d="M818.88,79.542L818.88,195.875L795.471,195.875L795.471,146.375L745.475,146.375L745.475,195.875L722.066,195.875L722.066,79.542L745.475,79.542L745.475,127.375L795.471,127.375L795.471,79.542L818.88,79.542Z" style="fill:white;fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,1.13687e-13,0.292)"><path d="M130.605,177.375L169.063,177.375L169.063,195.875L107.196,195.875L107.196,79.542L130.605,79.542L130.605,177.375Z" style="fill:rgb(32,32,32);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,1.13687e-13,0.292)"><path d="M454.436,195.875C443.511,195.875 433.479,193.319 424.338,188.208C415.197,183.097 407.952,176.014 402.601,166.958C397.25,157.903 394.575,147.653 394.575,136.208C394.575,124.875 397.25,114.681 402.601,105.625C407.952,96.569 415.197,89.486 424.338,84.375C433.479,79.264 443.511,76.708 454.436,76.708C465.471,76.708 475.532,79.264 484.617,84.375C493.702,89.486 500.892,96.569 506.187,105.625C511.482,114.681 514.129,124.875 514.129,136.208C514.129,147.653 511.482,157.903 506.187,166.958C500.892,176.014 493.674,183.097 484.533,188.208C475.393,193.319 465.36,195.875 454.436,195.875ZM454.436,175.042C461.458,175.042 467.645,173.458 472.996,170.292C478.347,167.125 482.527,162.597 485.537,156.708C488.546,150.819 490.051,143.986 490.051,136.208C490.051,128.431 488.546,121.625 485.537,115.792C482.527,109.958 478.347,105.486 472.996,102.375C467.645,99.264 461.458,97.708 454.436,97.708C447.413,97.708 441.198,99.264 435.792,102.375C430.386,105.486 426.177,109.958 423.168,115.792C420.158,121.625 418.653,128.431 418.653,136.208C418.653,143.986 420.158,150.819 423.168,156.708C426.177,162.597 430.386,167.125 435.792,170.292C441.198,173.458 447.413,175.042 454.436,175.042Z" style="fill:rgb(32,32,32);fill-rule:nonzero;"/></g></g></svg>
                            <p>
                                <strong>H</strong> est\xe1 en la posici\xf3n equivocada.
                            </p>
                        </div>
                        <div class="exampleTwo">
                            <svg width="100%" height="100%" viewBox="0 0 1225 276" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g><rect id="_01" serif:id="01" x="8.333" y="8.333" width="259.592" height="258.75" style="fill:none;stroke:rgb(86,87,88);stroke-width:11.5px;"/><rect id="_02" serif:id="02" x="324.556" y="8.333" width="259.592" height="258.75" style="fill:none;stroke:rgb(86,87,88);stroke-width:11.5px;"/><rect id="_03" serif:id="03" x="640.677" y="8.333" width="259.592" height="258.75" style="fill:none;stroke:rgb(86,87,88);stroke-width:11.5px;"/><rect id="_04" serif:id="04" x="957.075" y="8.333" width="259.592" height="258.75" style="fill:none;stroke:rgb(86,87,88);stroke-width:11.5px;"/><path d="M186.536,87.05L186.536,203.384L163.127,203.384L163.127,153.884L113.131,153.884L113.131,203.384L89.722,203.384L89.722,87.05L113.131,87.05L113.131,134.884L163.127,134.884L163.127,87.05L186.536,87.05Z" style="fill:rgb(32,32,32);fill-rule:nonzero;"/><path d="M1110.03,175.292L1063.55,175.292L1055.86,197.458L1031.28,197.458L1073.24,80.958L1100.5,80.958L1142.47,197.458L1117.72,197.458L1110.03,175.292ZM1103.68,156.625L1086.79,107.958L1069.9,156.625L1103.68,156.625Z" style="fill:rgb(32,32,32);fill-rule:nonzero;"/><path d="M762.949,178.792L801.407,178.792L801.407,197.292L739.539,197.292L739.539,80.958L762.949,80.958L762.949,178.792Z" style="fill:rgb(32,32,32);fill-rule:nonzero;"/><path d="M454.436,197.292C443.511,197.292 433.479,194.736 424.338,189.625C415.197,184.514 407.952,177.431 402.601,168.375C397.25,159.319 394.575,149.069 394.575,137.625C394.575,126.292 397.25,116.097 402.601,107.042C407.952,97.986 415.197,90.903 424.338,85.792C433.479,80.681 443.511,78.125 454.436,78.125C465.471,78.125 475.532,80.681 484.617,85.792C493.702,90.903 500.892,97.986 506.187,107.042C511.482,116.097 514.129,126.292 514.129,137.625C514.129,149.069 511.482,159.319 506.187,168.375C500.892,177.431 493.674,184.514 484.533,189.625C475.393,194.736 465.36,197.292 454.436,197.292ZM454.436,176.458C461.458,176.458 467.645,174.875 472.996,171.708C478.347,168.542 482.527,164.014 485.537,158.125C488.546,152.236 490.051,145.403 490.051,137.625C490.051,129.847 488.546,123.042 485.537,117.208C482.527,111.375 478.347,106.903 472.996,103.792C467.645,100.681 461.458,99.125 454.436,99.125C447.413,99.125 441.198,100.681 435.792,103.792C430.386,106.903 426.177,111.375 423.168,117.208C420.158,123.042 418.653,129.847 418.653,137.625C418.653,145.403 420.158,152.236 423.168,158.125C426.177,164.014 430.386,168.542 435.792,171.708C441.198,174.875 447.413,176.458 454.436,176.458Z" style="fill:rgb(32,32,32);fill-rule:nonzero;"/></g></svg>
                            <p>
                                <strong>H</strong> se encuentra en la posici\xf3n correcta.
                            </p>
                        </div>
                        <div class="lastMessage">
                            <p>Tendr\xe1s 45 segundos para encontrar la primer palabra con ayuda de una pista por cada palabra.</p>
                            <p class="p-bottom">Y con cada palabra que encuentres, agregar\xe1s 7 segundos al tiempo limite.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    `),n=sessionStorage.getItem("numberOfVisits");n||(n=0),n=+n+1,sessionStorage.setItem("numberOfVisits",n),1==n||51==n?(document.body.appendChild(e),setTimeout(()=>{let e=document.querySelector(".how-to-play-container");e.classList.add("show-final-message")}),document.getElementById("close").onclick=function(){let e=document.querySelector(".layer");e.addEventListener("click",function n(i){e.classList.add("removeDisplay"),setTimeout(()=>e.remove(),400)}),t=setInterval(T,1e3)}):(n>=51&&sessionStorage.removeItem("numberOfVisits"),t=setInterval(T,1e3))}function sZZM(){let e=function e(n){let i=document.createElement("template");return i.innerHTML=n.trim(),i.content.firstElementChild}(`
    <div class="layer">
        <div class="final-container">
            <div class="info-container">
                <h4>Staff</h4>
                <div class="message-container">
                    <p><a href="https://x.com" target="_blank">@**********</a></p>
                </div>
                <div class="bottom-container">
                    <div class="bottom-info">
                        <h4>Estad\xedsticas</h4>
                        <p>No lograste encontrar una sola palabra.</p>
                    </div>
                    <div id="button" onclick="r();">Volver a jugar</div>
                </div>
            </div>
        </div>
    <div>
    `);setTimeout(()=>{let e=document.querySelector(".final-container");e.classList.add("show-final-message")}),document.body.appendChild(e)}function sZSM(){let e=function e(n){let i=document.createElement("template");return i.innerHTML=n.trim(),i.content.firstElementChild}(`
    <div class="layer">
        <div class="final-container">
            <div class="info-container">
                <h4>Staff</h4>
                <div class="message-container">
                    <p><a href="https://x.com" target="_blank">@**********</a></p>
                </div>
                <div class="bottom-container">
                    <div class="bottom-info">
                        <h4>Estad\xedsticas</h4>
                        <p>Lograste encontrar ${sc} palabras de forma no consecutiva.</p>
                        <div id="share-btn" onclick="gSH();">Comparte tu resultado</div>
                    </div>
                    <div id="button" onclick="r();">Volver a jugar</div>
                </div>
            </div>
        </div>
    <div>
    `);setTimeout(()=>{let e=document.querySelector(".final-container");e.classList.add("show-final-message")}),document.body.appendChild(e)}function sTAM(){let e=function e(n){let i=document.createElement("template");return i.innerHTML=n.trim(),i.content.firstElementChild}(`
    <div class="layer">
        <div class="final-container">
            <div class="info-container">
                <h4>Staff</h4>
                <div class="message-container">
                    <p><a href="https://x.com" target="_blank">@**********</a></p>
                </div>
                <div class="bottom-container">
                    <div class="bottom-info">
                        <h4>Estad\xedsticas</h4>
                        <p>\xa1Bien hecho! Lograste conseguir ${sc} palabras de forma consecutiva.</p>
                        <div id="share-btn" onclick="gSH();">Comparte tu resultado</div>
                    </div>
                    <div id="button" onclick="r();">Volver a jugar</div>
                </div>
            </div>
        </div>
    <div>
    `);setTimeout(()=>{let e=document.querySelector(".final-container");e.classList.add("show-final-message")}),document.body.appendChild(e)}function sFM(){let e=function e(n){let i=document.createElement("template");return i.innerHTML=n.trim(),i.content.firstElementChild}(`
    <div class="layer">
        <div class="final-container">
            <div class="info-container">
                <h4>Staff</h4>
                <div class="message-container">
                    <p><a href="https://x.com" target="_blank">@**********</a></p>
                </div>
                <div class="bottom-container">
                    <div class="bottom-info">
                        <h4>\xa1Felicidades!</h4>
                        <p>Terminaste el diccionario completo de palabras sin equivocarte una sola vez.</p>
                        <p>Lograste encontrar ${sc} palabras en forma consecutiva.</p>
                        <p>Con un tiempo restante de ${tL}s.</p>
                        <div id="share-btn" onclick="gSH();">Comparte tu resultado</div>
                    </div>
                    <div id="button" onclick="r();">Volver a jugar</div>
                </div>
            </div>
        </div>
    </div>
    `);setTimeout(()=>{let e=document.querySelector(".final-container");e.classList.add("show-final-message")}),document.body.appendChild(e)}function r(){window.location.reload()}function gSH(){410==sc?window.open(`https://twitter.com/intent/tweet?url=\xa1Felicidades!%0a%0a%23Moshiy / ${sc}x en forma consecutiva.%0a%0a${slts}%0a%0aCon un tiempo restante de ${tL}s.`):sSqrs.includes(wSqr)?window.open(`https://twitter.com/intent/tweet?url=%23Moshiy / ${sc}x de forma no consecutiva.%0a%0a${slts}`):window.open(`https://twitter.com/intent/tweet?url=%23Moshiy / ${sc}x en forma consecutiva.%0a%0a${slts}`)}const sG=()=>{wC=0,s=0,aWs=[...wrds],hTP(),gNWD(),zP()};sG();