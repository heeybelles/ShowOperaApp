var vl, vl2;
vl2 = 0.0;
if (localStorage.getItem("valorTotal"))
{vl = parseFloat(localStorage.getItem("valorTotal"));}
else
{vl = 0.0;}
function teste(teste2)
{
if (document.getElementById(teste2).getAttribute("ocupado"))
{
    alert("Ocupado");
}
else if (localStorage.getItem("nmUsuario") != " " && localStorage.getItem("nmUsuario") != "")
{
    var ctz = confirm(localStorage.getItem("nmUsuario")+" quer sentar-se aqui?");
    if (ctz == true)
    {
    var ocupa = document.createAttribute("ocupado");
    ocupa.value = "true";
    localStorage.setItem(teste2, localStorage.getItem("nmUsuario"));

    vl = vl + parseFloat(document.getElementById(teste2).getAttribute("preco"));
    vl2 = vl2 + parseFloat(document.getElementById(teste2).getAttribute("preco"));
    document.getElementById("gasto").textContent = "Valor gasto: "+vl2+"\$";
    localStorage.setItem("valorTotal", vl);

    document.getElementById(teste2).setAttributeNode(ocupa);
    alert("Banco: "+teste2);
    }
}
else
{
    alert("Insira um nome. . .");
    window.location.href = "gui/telacadastro.html";
}
}

function ocupar()
{
    document.getElementById("gasto").textContent = "Valor gasto: 0$"
    for (var i=0 ;i < localStorage.length; i++)
    {
        //alert(localStorage.key(i))
    if (localStorage.key(i) != "valorTotal" && localStorage.key(i) != "nmUsuario" && localStorage.key(i) != "tree-645a5a87e78885c3084170db" && localStorage.key(i) != "golden_layout_config_645a5a87e78885c3084170db")
    {
    var ocupa = document.createAttribute("ocupado");
    ocupa.value = "true";
    document.getElementById(localStorage.key(i)).setAttributeNode(ocupa);
    }
    }
}


function clr()
{
    vl = 0.0;
    localStorage.setItem("nmUsuario"," ");
    for (var i=0;i < localStorage.length; i++)
    {
        //alert(localStorage.key(i))
    if (localStorage.key(i) != "valorTotal" && localStorage.key(i) != "nmUsuario" && localStorage.key(i) != "tree-645a5a87e78885c3084170db" && localStorage.key(i) != "golden_layout_config_645a5a87e78885c3084170db")
    {
    document.getElementById(localStorage.key(i)).removeAttribute("ocupado");
    }
    }
    localStorage.clear();
    localStorage.setItem("nmUsuario"," ");
    localStorage.setItem("valorTotal","0.0");
    document.getElementById("gasto").textContent = "Valor gasto: 0\$";
}
function troca()
{
    window.location.href = "gui/telaconsulta.html";
}
function inserir()
{
    localStorage.setItem("nmUsuario",document.getElementById("NomeUsuario").value);
    window.location.href = "telaconsulta.html";
}


function loading()
{
    for (var i=0 ;i < localStorage.length; i++)
    {
    if (localStorage.key(i) != "valorTotal" && localStorage.key(i) != "nmUsuario" && localStorage.key(i) != "tree-645a5a87e78885c3084170db" && localStorage.key(i) != "golden_layout_config_645a5a87e78885c3084170db")
    {
    var label = document.createElement("h1")
    label.textContent = localStorage.key(i)+": "+localStorage.getItem(localStorage.key(i))
    document.getElementById("tabela").appendChild(label)
    }
    }
    if (localStorage.getItem("valorTotal") != null)
    {
    document.getElementById("vl").textContent = "Valor Total: "+localStorage.getItem("valorTotal")+"$"
    }
    else
    {
    document.getElementById("vl").textContent = "Valor Total: 0$"
    }
}

function graphics()
{
    var green = 0 
    var brown = 0 
    var red = 0 
    var purple = 0 
    var orange = 0

        for (var i=0 ;i < localStorage.length; i++)
    {
    if (localStorage.key(i) != "valorTotal" && localStorage.key(i) != "nmUsuario" && localStorage.key(i) != "tree-645a5a87e78885c3084170db" && localStorage.key(i) != "golden_layout_config_645a5a87e78885c3084170db")
    {
    if (localStorage.key(i).substring(0,1) == "A" || localStorage.key(i).substring(0,1) == "B")
    {
        green += 1
    }
    else if (localStorage.key(i).substring(0,1) == "C")
    {
        brown += 1
    }
    else if (localStorage.key(i).substring(0,1) == "D")
    {
        if (localStorage.key(i).substring(1,2) == "1" || localStorage.key(i).substring(1,2) == "2" || localStorage.key(i).substring(1,2) == "8" || localStorage.key(i).substring(1,2) == "9")
        {
            purple += 1
        }
        else if (localStorage.key(i).substring(1,2) == "3" || localStorage.key(i).substring(1,2) == "7")
        {
            red += 1
        }
        else if (localStorage.key(i).substring(1,2) == "4" || localStorage.key(i).substring(1,2) == "5" || localStorage.key(i).substring(1,2) == "6")
        {
            orange += 1
        }
    }
    else if (localStorage.key(i).substring(0,1) == "E")
    {
        if (localStorage.key(i).substring(1,2) == "1" || localStorage.key(i).substring(1,2) == "2" || localStorage.key(i).substring(1,2) == "8" || localStorage.key(i).substring(1,2) == "9")
        {
            purple += 1
        }
        else if (localStorage.key(i).substring(1,2) == "3" || localStorage.key(i).substring(1,2) == "7")
        {
            red += 1
        }
        else if (localStorage.key(i).substring(1,2) == "4" || localStorage.key(i).substring(1,2) == "5" || localStorage.key(i).substring(1,2) == "6")
        {
            orange += 1
        }
    }
    }
    }
    document.getElementById('bro').setAttribute('style','--p:'+(brown/5)*100+';--c:rgb(156, 89, 2);--b:10px');
    document.getElementById('bro').textContent = Math.round((brown/5)*100)+"%";
    document.getElementById('red').setAttribute('style','--p:'+(red/4)*100+';--c:rgb(196, 15, 15);--b:10px');
    document.getElementById('red').textContent = Math.round((red/4)*100)+"%";
    document.getElementById('ora').setAttribute('style','--p:'+(orange/6)*100+';--c:rgb(226, 150, 35);--b:10px');
    document.getElementById('ora').textContent = Math.round((orange/6)*100)+"%";
    document.getElementById('gre').setAttribute('style','--p:'+(green/10)*100+';--c:rgb(53, 223, 11);--b:10px');
    document.getElementById('gre').textContent = Math.round((green/10)*100)+"%";
    document.getElementById('pur').setAttribute('style','--p:'+(purple/8)*100+';--c:rgb(156, 2, 156);--b:10px');
    document.getElementById('pur').textContent = Math.round((purple/8)*100)+"%";

}