function RequestData2(link) {
    fetch(link, { method: "GET" })
      .then(responce => responce.json())
      .then((data) => MakeTable2(data))
    
  }
  
  function MakeTable2(input) {
    console.log(input);
    let anHTML = `<table id="table1"><tr><th>Interview_Name</th>
            <th>Interview_Date</th><th>At</th><th>Interview_Type</th> </tr>`
    input.forEach(ele => {
      console.log(ele);
      anHTML += "<tr><td>" +
        ele.Interview_Name + "</td><td>" +
        ele.Interview_Date + "</td><td>" +
        ele.At + "</td><td>" +
        ele.Interview_Type + "</td><td>";
  
    })
    anHTML += "</table>";
    document.querySelector(".Interviews").innerHTML = anHTML;
  
  
  }