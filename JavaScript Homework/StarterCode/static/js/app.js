// from data.js
var tableData = data;

// YOUR CODE HERE!

// function to show UFO data
function displayTable(ufoData) {
    var tbody = d3.select("tbody");
    ufoData.forEach((ufoSight) => {
      var row = tbody.append("tr");
      Object.entries(ufoSight).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // clear table to iclude new data
  function deleteTable() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // display all UFO sightings
  console.log(tableData);
  displayTable(tableData);
  
  // filter button
  var button = d3.select("#filter-btn");
  
  // filter the database
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTable();
    var inputDate = d3.select("#datetime").property("value");
    
    if (inputDate.trim() === "" ) {
      // if no date is given by default all data will show
      var dataFilter = tableData;
    } else {
      // else, the data filter will show  
      var dataFilter = tableData.filter(ufoSight => 
        ufoSight.datetime === inputDate.trim());
    };
  
    // if no records are find a message will show
    if (dataFilter.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan",10)
          .html("<h4>No Sightings, Try Another Date</h4>");
    };
  
    console.log(dataFilter);
    displayTable(dataFilter);
  });