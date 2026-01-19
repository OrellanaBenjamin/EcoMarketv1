const TituloPagina = document.title;

document.addEventListener("visibilitychange",() =>{
    if(document.hidden){
        document.title = "¡Vuelve a EcoMarket 😢!";
    }else{
        document.title = TituloPagina;
    }
});