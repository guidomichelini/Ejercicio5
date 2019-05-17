
function betterWorkSites(){
    fetch('https://api.mercadolibre.com/sites')
        .then(function(response) {
            return response.json();
        })


        .then(function(sites) {
            var sel = document.getElementById('sitesdropdown') // find the drop down
            var opt = document.createElement("option"); // Create the new element
            opt.value = 'None'; // set the value
            opt.text = 'Seleccione un site'; // set the text
            sel.appendChild(opt);
            console.log("Fin")

            for (var i in sites) { // loop through all elements
                var opt = document.createElement("option"); // Create the new element
                opt.value = sites[i].id; // set the value
                opt.text = sites[i].name; // set the text

                sel.appendChild(opt); // add it to the select
            }


        });

}

function printSelectedSiteId(selectedSite){
    var siteId= selectedSite.options[selectedSite.selectedIndex].value;

    if(siteId==='None'){
        console.log('No seleccionó Site')
    }
    else{
        console.log('Selecciona un site')



        getTrendsBySite(siteId)
        //fill category combobox
    }

}

function getTrendsBySite(siteId){
    var url = 'https://api.mercadolibre.com/trends/'+siteId
    fetch(url)
        .then(function(response) {
            return response.json();
        })


        .then(function(trends) {
            var res= new Array()

            for (var i in trends) { // loop through all elements
                res.push(trends[i].keyword)
            }
            console(res)

            getTrends(res)
        });

}

betterWorkSites()


