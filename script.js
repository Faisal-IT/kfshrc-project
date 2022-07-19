

    var list1=[];
    var list2=[];
    var list3=[];
    var list4=[];

    var n = 1;
    var x = 0;


    function test() {

        var AddRows = document.getElementById('details');
        var NewRow = AddRows.insertRow(n);

        list1[x] = document.getElementById("fname").value;          
        list2[x] = document.getElementById("lname").value;
        list3[x] = document.getElementById("email").value;
        list4[x] = document.getElementById("phone").value;

        var c1 = NewRow.insertCell(0);
        var c2 = NewRow.insertCell(1);
        var c3 = NewRow.insertCell(2);
        var c4 = NewRow.insertCell(3);

        c1.innerHTML = list1[x];
        c2.innerHTML = list2[x];
        c3.innerHTML = list3[x];
        c4.innerHTML = list4[x];

        n++;
        x++;


            
            // var result1 = Text1;
            // var result2 = Text2;
            // var result3 = Text3;
            // var result4 = Text4;
           
            // document.getElementById('SResult1').textContent = result1;
            // document.getElementById('SResult2').textContent = result2;
            // document.getElementById('SResult3').textContent = result3;
            // document.getElementById('SResult4').textContent = result4;
           
             
        }