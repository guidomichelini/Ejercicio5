var siteId = 'None';
var categoryId = 'None';
var option='Name'
var rows = 3;
var cols = 3;

console.log("ENTRO")

function betterWorkSites() {
    fetch('https://api.mercadolibre.com/sites')
        .then(function (response) {
            return response.json();
        })
        .then(function (sites) {
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

function betterWorkCategories(siteId) {
    var sel = document.getElementById('categorydropdown') // find the drop down
    clearOptions(sel)

    var opt = document.createElement("option"); // Create the new element
    opt.value = 'None'; // set the value
    opt.text = 'Seleccione una categoría'; // set the text+
    sel.appendChild(opt);

    if (siteId == 'None') {

    } else {
        fetch('https://api.mercadolibre.com/sites/' + siteId + '/categories')
            .then(function (response) {
                return response.json();
            })


            .then(function (categories) {

                if (categories.length == 0) {

                } else {
                    for (var i in categories) { // loop through all elements
                        var opt = document.createElement("option"); // Create the new element
                        opt.value = categories[i].id; // set the value
                        opt.text = categories[i].name; // set the text
                        sel.appendChild(opt); // add it to the select
                    }
                }

            });
    }


}

function setSiteId(selectedSite) {
    siteId = selectedSite.options[selectedSite.selectedIndex].value;
    betterWorkCategories(siteId);
}

function setCategoryId(selectedCategory) {
    categoryId = selectedCategory.options[selectedCategory.selectedIndex].value;

}

function setRows(rowsDropdown) {
    rows = parseInt(rowsDropdown.options[rowsDropdown.selectedIndex].value, 10);

}

function setColumns(colsDropdown) {
    cols = parseInt(colsDropdown.options[colsDropdown.selectedIndex].value, 10);

}

function setOption(optionRadio){
    option=optionRadio.value
    console.log(option)
}


function getTrendsBySite() {
    if (siteId === 'None') {
        console.log('No seleccionó Site')
    } else {
        console.log('Selecciona un site')
        //fill category combobox

        var url = 'https://api.mercadolibre.com/trends/' + siteId

        if (categoryId != 'None') {
            url = url + '/' + categoryId
        }

        fetch(url)
            .then(function (response) {
                return response.json();
            })


            .then(function (trends) {
                console.log(trends)
                var res = new Array()

                if (trends !== null) {

                    for (var i in trends) { // loop through all elements
                        res.push(trends[i].keyword)
                    }
                } else {
                    res = null
                }


                getTrends(res, rows, cols)

            });
    }

}

function clearOptions(comboBox) {
    while (comboBox.options.length > 0) {
        comboBox.remove(0);
    }
}


betterWorkSites()


