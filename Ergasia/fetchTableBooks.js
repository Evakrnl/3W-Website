function RequestData(link) {
    fetch(link, { method: "GET" })
      .then(responce => responce.json())
      .then((data) => MakeTable(data))
    
  }
  
  function MakeTable(input) {
    console.log(input);
    let anHTML = `<table id="table1"><tr><th>Book_Name</th>
            <th>Date_Published</th></tr>`
    input.forEach(ele => {
      console.log(ele);
      anHTML += "<tr><td>" +
        ele.Book_Name + "</td><td>" +
        ele.Date_Published + "</td><td>";
  
    })
    anHTML += "</table>";
    document.querySelector(".Books").innerHTML = anHTML;
  
  
  }