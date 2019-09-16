//step02
let obj1 = {name:"김수경", age:30};
console.log(obj1.name);

let obj2 = {};
obj2.name = "김혜경";
console.log(obj2.name);

console.log(typeof(obj1));
console.log(typeof(obj2));

console.log(obj1);
console.log(obj1.toString());
console.log(obj1.valueOf());

let obj3 = new Object();
obj3.id = "tester";
console.log(obj3.id);

console.log("-----step03-----");

function client(id){
    this.id = id;

    this.setId = function(id){
        this.id = id;
    };
    this.getId = function(){
        return this.id;
    };
}
let obj4 = new client("tester");
console.log(obj4.id);
console.log(obj4.getId());
obj4.setId("me");
console.log(obj4.getId());

obj4.address = "서초";
console.log(obj4.address);

obj4.setAddress = function(address){
    this.address = address;
};
obj4.getAddress = function(){
    return this.address;
};

console.log(obj4.address);
console.log(obj4.getAddress());
obj4.setAddress("부천");
console.log(obj4.getAddress());

console.log(obj4["address"]);

console.log("---반복문---");

for (let data in obj4){
    console.log(data + " : " + obj4[data]);
}

delete obj4.address;
console.log(obj4.address);

//민웅 형님코드 에러 160개박멸
let selectedIndex1 = "";
let selectedIndex2 = "";
let select_text2 = "";
let select_value1 = "";
let select_value2 = "";
let arrSelect = [];
let selectHtml;
function select_form1(){
    selectedIndex1 = document.custom.customSelect1.options.selectedIndex;
    select_value1 = document.custom.customSelect1.options[selectedIndex1].value;
    if (select_value1 != ""){
        document.custom.customSelect2.style.display = "inline";
        selectDivision(select_value1);
    } else if (select_value1 == ""){
        document.custom.customSelect2.style.display = "none";
    }
}
select_form1();
function select_form2(){
    selectedIndex2 = document.custom.customSelect2.options.selectedIndex;
    select_text2 = document.custom.customSelect2.options[selectedIndex2].text;
    select_value2 = document.custom.customSelect2.options[selectedIndex2].value;
    if (select_text2 != ""){
        document.custom.customSelect3.style.display = "inline";
        selectArea(select_value1, select_value2);
    } else if (select_text2 == ""){
        document.custom.customSelect3.style.display = "none";
    }
}
select_form2();
function selectDivision(guNm) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            selectHtml = "<option selected value=\"\">상권형태</option>";
            arrSelect = eval(this.responseText);
            for (let i = 0; i < arrSelect.length; i++){
                selectHtml += "<option value=\"" + arrSelect[i] + "\">" + arrSelect[i] + "</option>";
            }
            document.getElementById("customSelect2").innerHTML = selectHtml;
        }
    };
    xhttp.open("POST", "CommertialController?command=getSelectDivision&guNm=" + guNm, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function selectArea(guNm, divisionNm) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            selectHtml = "<option selected value=\"\">상권명</option>";
            arrSelect = eval(this.responseText);
            for (let i = 0; i < arrSelect.length; i++){
                selectHtml += "<option value=\"" + arrSelect[i] + "\">" + arrSelect[i] + "</option>";
            }
            document.getElementById("customSelect3").innerHTML = selectHtml;
        }
    };
    xhttp.open("POST", "CommertialController?command=getSelectArea&guNm=" + guNm + "&divisionNm=" + divisionNm, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

//step 05
let plusNum = (val1, val2) => val1 + val2;
console.log(plusNum(10, 20));

let minusNum = (val1, val2) => val1 - val2;
console.log(minusNum(20, 10));

let numArray = [1, 4, 7, 2, 6, 9, 4, 5, 7, 8, 2];
let charArray = ["ab", "bf", "agh", "fdgr", "avr"];
let devide = numArray.map((v) => {
    if (v > 5){
        return v = v + "는(은) 5보다 큰 수입니다.";
    } else {
        return v = v + "는(은) 5보다 작은 수입니다.";
    }
});

let b = 0;
let v = 0;
let calculate = numArray.reduce((q, a) => {
    if (a > 5){
        v += 1;
    } else {
        b += 1;
    }
    return "numArray의 숫자들 중 5보다 큰 숫자의 수는" + v + "개이고, 5보다 작은숫자의 수는" + b + "개입니다.";
});

let search = charArray.filter(word => word.includes("a"));

console.log(devide);
console.log(calculate);
console.log("charArray의 a가 포함된 문자열의 개수는" + search.length + "개 입니다.");