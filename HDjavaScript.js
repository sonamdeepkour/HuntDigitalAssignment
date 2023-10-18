import('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js');

function getMonth(){
var date = document.getElementById("StartDate").value;
var res = date.split("-");
var months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var final = [months[res[1]-1],res[0]];
return final;
}


var datesArray = [];

function addDate(){
    const dateInput = document.getElementById("bNotDate");
    datesArray.push(dateInput.value);
}

function numOfDays(){
    var date1 = document.getElementById("StartDate").value; 
    var date2 = document.getElementById("EndDate").value; 
    const date11 = new Date(date1);
    const date22 = new Date(date2);
    var timeDifference = date22 - date11;

    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var daysDifference2 = daysDifference - datesArray.length;
    return daysDifference2;
}

var Sdate = "";
var Edate = "";
var mont = "";
var notD = [];
var num = "";
var LeadC = "";
var Dr = "";
var time = "";


function submitForm(){
    var StartDate = document.getElementById("StartDate").value;
    Sdate = StartDate;
    var EndDate = document.getElementById("EndDate").value;
    Edate = EndDate;
    var month = getMonth();
    mont = month;

    var Days = numOfDays();
    num = Days;
    var LeadCount = document.getElementById("LeadCount").value;
    LeadC = LeadCount;
    var Drr = Math.floor(LeadCount/Days);
    Dr = Drr; 

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML = StartDate;
    td2.innerHTML = EndDate;
    td3.innerHTML = month;
    var des = ""
    for(const ele of datesArray){
        des = des + ele + "<br>";
    };
    notD = des;
    td4.innerHTML = des;
    td5.innerHTML = Days;
    td6.innerHTML = LeadCount;
    td7.innerHTML = Drr;
    var nowDate = new Date();
    var nowDate2 = nowDate.toString();
    var nowDate3 = nowDate2.slice(0,25);
    td8.innerHTML = nowDate3;
    time = nowDate3;

    document.getElementById("table").appendChild(tr);
    var len = datesArray.length
    while(len>0){
        datesArray.pop();
        len--;
    }
    cancel();
}

function cancel(){
    var can = document.getElementById("StartDate");
    can.value = '';
    var can2 = document.getElementById("EndDate");
    can2.value = '';
    var can3 = document.getElementById("bNotDate");
    can3.value = '';
    var can4 = document.getElementById("LeadCount");
    can4.value = '';
}

function updateEndDateMin() {
    const startDateInput = document.getElementById('StartDate');
    const endDateInput = document.getElementById('EndDate');
    const min1 = document.getElementById('bNotDate');
    
    endDateInput.min = startDateInput.value;
    min1.min = startDateInput.value;
}

function updateEndDateMax() {
    const endDateInput = document.getElementById('EndDate');
    const max2 = document.getElementById('bNotDate');
    
    max2.max = endDateInput.value;
}

$(document).ready(function(){
    $('#save').click(function(){
        const tableData = [];
        const rowData = {};
        rowData['StartDate'] = Sdate;
        rowData['EndDate'] = Edate;
        rowData['Month'] = mont;
        rowData['Excluded dates'] = notD;
        rowData['Num Of Days'] = num;
        rowData['Lead Count'] = LeadC;
        rowData['Drr'] = Dr;
        rowData['Submit Date'] = time;
        tableData.push(rowData);
        
        const jsonData = JSON.stringify(tableData, null, 2);
        console.log(jsonData);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:5500", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
        
          console.log("Data has been saved to the file.");
         }
        }; 

        xhr.send(jsonData);
    } )
} )


