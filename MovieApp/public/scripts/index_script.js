
async function searchFunction() {

    var title = document.getElementById("search").value

    var moviesJson

    var res = await fetch('search?title='+title, {
        method: 'GET'
    })

    moviesJson = await res.json().catch(e => {
        return
    })

    if (moviesJson === undefined) return

    var list = document.getElementById("list")

    if (list != null) {
        //change list items
        populateList(list,moviesJson)
    }
    else {
        //make list element
        list = document.createElement("ul")
        list.setAttribute("id","list")
        list.className = "results_list"
        document.getElementById("results_list").appendChild(list)

        //make list items
        populateList(list,moviesJson)
    }
}

function scaleSearch() {
    document.getElementById('search').style = "transform: scale(1.1);";
}

function scaleSearchBack () {
    document.getElementById('search').style = "transform: scale(0.9999);";
}