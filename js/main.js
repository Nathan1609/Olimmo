(function(){
var b=document.querySelector(".menu"),n=document.getElementById("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");b.setAttribute("aria-expanded","false")}});
var fs=document.querySelectorAll(".filters button"),ps=document.querySelectorAll(".prop[data-t]");
fs.forEach(function(x){x.addEventListener("click",function(){
fs.forEach(function(y){y.setAttribute("aria-pressed",y===x)});
ps.forEach(function(p){p.hidden=x.dataset.f!=="all"&&p.dataset.t!==x.dataset.f})})});
var hd=document.querySelector("header.site");
function sc(){hd.classList.toggle("scrolled",scrollY>10);var m=document.documentElement.scrollHeight-innerHeight;hd.style.setProperty("--p",m>0?Math.min(scrollY/m,1):0)}
addEventListener("scroll",sc,{passive:true});sc();
if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&"IntersectionObserver" in window){
document.documentElement.classList.add("js");
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll("main h2,section:not(.hero) .lead,.facts li,.svc li,.svc img,.prop,.filters,.about>*,blockquote,details,.contact .grid2>*").forEach(function(el){var i=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.setProperty("--d",Math.min(i,5)*.08+"s");el.classList.add("rv");io.observe(el)})}
document.getElementById("f").addEventListener("submit",function(e){
e.preventDefault();var f=e.target,v=function(k){return f.elements[k].value.trim()};
var body="Nom : "+v("nom")+"\nTéléphone : "+v("tel")+"\nE-mail : "+v("email")+"\n\n"+v("msg");
location.href="mailto:info@olimmo.be?subject="+encodeURIComponent("Demande de rendez-vous depuis olimmo.be")+"&body="+encodeURIComponent(body);
document.getElementById("ok").textContent="Votre messagerie s’ouvre pour envoyer la demande à info@olimmo.be."});
})();
