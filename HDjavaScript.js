import('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js');

function getMonth(){
var date = document.getElementById("StartDate").value;
var res = date.split("-");
var months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var final = [months[res[1]-1],res[0]];
return final;
}

/*function numOfDays(){
    var date = document.getElementById("StartDate").value;
    var date2 = document.getElementById("EndDate").value;
    var res = date.split("-");
    var res2 = date2.split("-");
    return (res2[2]-res[2]);
}*/


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
/*<input type="date" id="notDates" name="notDates"></input> */
/*<td id="NotDate"><button id="NotDateBut" onclick="addDate()">Add Date</button><p id="pNotDate"></p></td>*/
/*function addDate(){
    var input = document.createElement("input");
    input.type = "date";
    input.name = "dates[]"; // Use an array to store multiple dates
    var br = document.createElement("br");
    document.getElementById("pNotDate").appendChild(input);
    document.getElementById("pNotDate").appendChild(br);
    var i = 0;
    datesArray[i] = input.value;
    i++;
}*/

function submitForm(){
    var StartDate = document.getElementById("StartDate").value;
    var EndDate = document.getElementById("EndDate").value;
    var month = getMonth();

    /*var Notmonth = document.getElementById("notDates").value;*/
    var Days = numOfDays();
    var LeadCount = document.getElementById("LeadCount").value;
    var Drr = LeadCount/Days;

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
    td4.innerHTML = des;
    td5.innerHTML = Days;
    td6.innerHTML = LeadCount;
    td7.innerHTML = Drr;
    var nowDate = new Date();
    var nowDate2 = nowDate.toString();
    var nowDate3 = nowDate2.slice(0,25);
    td8.innerHTML = nowDate3;

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

/*$(document).ready(function(){
    $('#save').click(function(){
        var StartDate = $('#StartDate').val();
        var EndDate = $('#EndDate').val();
        var month = $(getMonth()).val();
        var Notdates = $(datesArray).val();
        var Days = $(numOfDays()).val();

        var Days2 = numOfDays();
        var LeadCount2 = document.getElementById("LeadCount").value;
        var Drr = LeadCount/Days;
        var LeadCount = $('#LeadCount').val();
        var Drr2 = $(Drr).val();

        var nowDate = new Date();
        var nowDate2 = nowDate.toString();
        var nowDate3 = nowDate2.slice(0,25);
        var nowDate4 = $(nowDate3).val();

        $.ajax({

        })
    } )
} )
*/

