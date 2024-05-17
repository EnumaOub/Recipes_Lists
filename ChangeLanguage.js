function ChangeLanguage() {
    lang = getLang();
    ChangeLink();
    ChangeButton(lang);
    ChangeTitles(lang)
}

function getLang() {

    let lang = document.querySelector("html").lang;
    if (lang == "fr") {
        document.querySelector("html").lang = "en"
    }
    else if (lang == "en") {
        document.querySelector("html").lang = "fr"
    }
    return lang
}

function ChangeButton(lang) {
    let button = document.getElementById("lg-bt");
    if (lang == "fr") {
        button.textContent = "Click Here For English Page"
    }
    else if (lang == "en") {
        button.textContent = "Cliquez Ici Pour La Page En Francais"
    }
}

function ChangeTitles(lang) {
    let title = document.getElementsByClassName("title")[0].querySelector("h1")
    let meal = document.getElementsByClassName("meals")[0].querySelector("h2")
    if (lang == "fr") {
        title.textContent = "List of Recipes"
        meal.textContent = "Hot Meals"
    }
    else if (lang == "en") {
        title.textContent = "Liste de recettes"
        meal.textContent = "Plâts Chaud"
    }
}



function ChangeLink(lang) { 
    let link = document.getElementsByClassName("link-ext");
    for ( const val of Object.values(link) ) {
        let link_val = val.href; 
        res = link_val.split("/")
        for ( let i=0; i<res.length; i++ ) {
            
            if (res[i] == "fr") {
                lang = res[i];
                res[i] = "eng";
                break;
            }
            else if (res[i] == "eng") {
                lang = res[i];
                res[i] = "fr";
                break;
            }
        }
        
        res = res.join("/")
        val.setAttribute("href", 
            res); 
    }
    

    
} 