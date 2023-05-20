var brow, red2, oran, gree, purp;
brow = 100;
red2 = 1;
oran = 15;
gree = 65;
purp = 99;
/*const teste2 = localStorage.getItem("laranja")
function test()
{
alert(teste2+" 11")
localStorage.setItem("laranja", oran)
alert(localStorage.getItem("laranja")+" 13")
}*/

function porc()
{
    document.getElementById('bro').setAttribute('style','--p:'+brow+';--c:rgb(156, 89, 2);--b:10px');
    document.getElementById('bro').textContent = brow+"%";
    document.getElementById('red').setAttribute('style','--p:'+red2+';--c:rgb(196, 15, 15);--b:10px');
    document.getElementById('red').textContent = red2+"%";
    document.getElementById('ora').setAttribute('style','--p:'+oran+';--c:rgb(226, 150, 35);--b:10px');
    document.getElementById('ora').textContent = oran+"%";
    document.getElementById('gre').setAttribute('style','--p:'+gree+';--c:rgb(53, 223, 11);--b:10px');
    document.getElementById('gre').textContent = gree+"%";
    document.getElementById('pur').setAttribute('style','--p:'+purp+';--c:rgb(156, 2, 156);--b:10px');
    document.getElementById('pur').textContent = purp+"%";

}