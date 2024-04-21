let btnsubmit   = document.getElementById('btnsubmit');
let code        = document.getElementById( 'ttcode' );
let Name        = document.getElementById("ttname");
let qty         = document.getElementById("ttqty");
let price       = document.getElementById("ttprice");
let discount    = document.getElementById("discount"); 
let Total = 0;
let pay=0;
let txt='';

// btnsubmit.addEventListener ('click', function(){
//     alert(code.value+Name.value+qty.value+price.value+discount.value);
// });

btnSub.addEventListener( 'click', function(){
    if(code.value==''){
        code.focus();
    
    }else if (Name.value == '') {
        Name.focus();
        // alert('Please enter the product Name!');
    } else if(qty.value == '' ) {
        qty.focus();
    }else if(price.value ==''){
        price.focus();
    }else if(discount.value==''){
        discount.focus();
    }
    else{
        // Total=(price.value)*(qty.value);
        // pay=(Total.value)-((Total.value)*((discount.value)/100));
           txt = txt +
            `
           
        <tr>
        <td> ${code.value} </td>
        <td> ${Name.value}</td>
        <td> ${qty.value} </td>
        <td> ${price.value} </td>
        <td> ${Total.value} </td>
        <td> ${discount.value} </td>
        <td> ${pay.value} </td>
        
        </tr>`;
  
    document.getElementById("demo").innerHTML=txt;
    
    }
    });
