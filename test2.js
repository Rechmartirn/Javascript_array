let num = document.getElementById("num");
let btnadd = document.getElementById("add");
let view = document.getElementById("view");
let update = document.getElementById("update");
let deletee = document.getElementById("delete");

const arrnum = [];

btnadd.addEventListener('click',function(){
    //push use to add value at the end of an array
    arrnum.push(num.value);
    console.log(arrnum);
} )

view.addEventListener('click',function(){
    
    let txt = `
        <table class="table table-hover table-dark text-center">
            <tr>
                <th>Index</th>
                <th>Value</th>
            </tr>
    
    `;

    arrnum.forEach(function(value,index,array){
        txt+=
        `<tr>
            <td>${index}</td>
            <td>${value}</td>
        </tr>`;
    })
    document.getElementById("demo").innerHTML = txt+'</table>';
})

update.addEventListener('click',function(){
    let check = arrnum.findIndex((val) => val ==num.value);
    if(check != -1){
        arrnum[check] = Number(prompt('Enter New Number :'));
    }
        else{
            alert("Value Not Found");
        }
})

deletee.addEventListener('click',function(){
    let check = arrnum.findIndex((val) => val ==num.value);
    if(check != -1){
        arrnum.splice(check,1);
    }
    else{
        alert("Value Not Found");
    }   
})

var person={
    id:101,
    name:"A",
    age:20,
    city:"Mumbai"
};
// console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(person.id);