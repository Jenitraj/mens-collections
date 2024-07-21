var collection_container = document.getElementById("collections-section")
var search = document.getElementById("search")
var collectionslist = collection_container.querySelectorAll("div")
search.addEventListener("keyup", function() {
    var enteredValue = event.target.value.toUpperCase()
    for (count=0; count <collectionslist.length; count=count+1)
    {
        var collectionname = collectionslist [count].querySelector("p").textContent
        if(collectionname.toUpperCase().indexOf (enteredValue)<0)
        {
            collectionslist [count].style.display="none"
        }
        else{
            collectionslist [count].style.display="block"
        }
    }
})

//selecting side-navbar

var sidenav = document.querySelector(".side-navbar")

function show_navbar()
{
    sidenav.style.left = "0"
}

function close_navbar()
{
    sidenav.style.left = "-60%"
}