// from data.js
var tableData = data;

// placement of data into html
tbody = d3.select("tbody");

// use forEach to loop thru tableData & enter into html table
function displayData(data){
    tbody.text("")
    data.forEach(function(sighting){
    row = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        newTable = row.append("td").text(value)
    })
})}

displayData(tableData);


// locate datetime and button in html
// create function and filter by date 
var inputDate = d3.select("#datetime");
var button = d3.select("filter-btn");

function clickSelect(){
    d3.event.preventDefault();
    console.log(inputDate.property("value"));
    var addedTable = tableData.filter(sighting=>sighting.datetime===inputDate.property("value"))
    displayData(addedTable);
}

// make the button work
inputDate.on("change", clickSelect);